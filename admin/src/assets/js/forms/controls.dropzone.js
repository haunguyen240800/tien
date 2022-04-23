class DropzoneControls{constructor(){"undefined"!=typeof Dropzone?(this._initImage(),this._initTextFiles(),this._initColumns(),this._initFilled(),this._initTopLabel(),this._initFloatingLabel(),this._initSingleImageUpload(),this._initUploadedFiles()):console.log("Dropzone is undefined!")}_initImage(){document.querySelector("#dropzoneImage")&&new Dropzone("#dropzoneImage",{url:"https://httpbin.org/pos",init:function(){this.on("success",(function(e,t){console.log(t)}))},acceptedFiles:"image/*",thumbnailWidth:160,previewTemplate:DropzoneTemplates.previewTemplate})}_initTextFiles(){document.querySelector("#dropzoneText")&&new Dropzone("#dropzoneText",{url:"https://httpbin.org/post",init:function(){this.on("success",(function(e,t){console.log(t)}))},acceptedFiles:".txt, .doc, .pdf, .odt",thumbnailWidth:160,previewTemplate:DropzoneTemplates.previewTemplate})}_initColumns(){document.querySelector("#dropzoneColumns")&&new Dropzone("#dropzoneColumns",{url:"https://httpbin.org/pos",init:function(){this.on("success",(function(e,t){console.log(t)}))},acceptedFiles:"image/*",thumbnailWidth:600,thumbnailHeight:430,previewTemplate:DropzoneTemplates.columnPreviewImageTemplate})}_initFilled(){document.querySelector("#dropzoneFilled")&&new Dropzone("#dropzoneFilled",{url:"https://httpbin.org/post",init:function(){this.on("success",(function(e,t){console.log(t)}))},thumbnailWidth:160,previewTemplate:DropzoneTemplates.previewTemplate})}_initTopLabel(){document.querySelector("#dropzoneTopLabel")&&new Dropzone("#dropzoneTopLabel",{url:"https://httpbin.org/post",init:function(){this.on("success",(function(e,t){console.log(t)}))},thumbnailWidth:160,previewTemplate:DropzoneTemplates.previewTemplate})}_initFloatingLabel(){document.querySelector("#dropzoneFloatingLabel")&&new Dropzone("#dropzoneFloatingLabel",{url:"https://httpbin.org/post",init:function(){this.on("success",(function(e,t){console.log(t)}))},thumbnailWidth:160,dictDefaultMessage:"",previewTemplate:DropzoneTemplates.previewTemplate})}_initSingleImageUpload(){if("undefined"!=typeof SingleImageUpload&&document.getElementById("singleImageUploadExample")){new SingleImageUpload(document.getElementById("singleImageUploadExample"),{fileSelectCallback:e=>{console.log(e)}})}}_initUploadedFiles(){document.querySelector("#dropzoneServerFiles")&&new Dropzone("#dropzoneServerFiles",{url:"https://httpbin.org/post",thumbnailWidth:160,previewTemplate:DropzoneTemplates.previewTemplate,init:function(){this.on("success",(function(e,t){console.log(t)})),this.on("addedfile",(e=>{e.type&&!e.type.match(/image.*/)&&(e.documentPrev||(e.previewTemplate.classList.remove("dz-image-preview"),e.previewTemplate.classList.add("dz-file-preview"),e.previewTemplate.classList.add("dz-complete"),e.documentPrev=!0,this.emit("addedfile",e),this.removeFile(e)))}));this.displayExistingFile({name:"bread.webp",size:12842},"img/product/small/product-1.webp");this.displayExistingFile({name:"cake.webp",size:22354},"img/product/small/product-2.webp"),this.element.classList.add("dz-started")}})}}