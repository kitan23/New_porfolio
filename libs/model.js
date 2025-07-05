import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"

export function loadGLTFModel(
   scene, 
   glbPath, 
   options = {receiveShadow: true, castShadow: true}
){
   const { receiveShadow, castShadow} = options;  
   return new Promise((resolve, reject) => {
      const loader = new GLTFLoader(); 
      
      // Setup DRACOLoader for compressed models
      if (glbPath.includes('LittlestTokyo')) {
         const dracoLoader = new DRACOLoader();
         dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
         loader.setDRACOLoader(dracoLoader);
      }
      
      loader.load(
         glbPath, 
         gltf => {
            const obj = gltf.scene;  
            obj.name = glbPath.includes('LittlestTokyo') ? "tokyo" : "dog"; 
            obj.position.y = 0;
            obj.position.x = 0; 
            obj.receiveShadow = receiveShadow; 
            obj.castShadow = castShadow; 
            
            // Special handling for Tokyo diorama
            if (glbPath.includes('LittlestTokyo')) {
               obj.scale.set(0.01, 0.01, 0.01); // Scale down the large diorama
            }
            
            scene.add(obj);  
            obj.traverse(function(child){
               if(child.isMesh){
                  child.castShadow = castShadow; 
                  child.receiveShadow = receiveShadow; 
               }
            })
            resolve(obj); 
         }, 
         undefined, 
         function (error) {
            reject(error); 
         }
      ) 
   })
}
