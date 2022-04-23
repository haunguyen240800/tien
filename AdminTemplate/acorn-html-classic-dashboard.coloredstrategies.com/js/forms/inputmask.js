class InputMask{constructor(){"undefined"!=typeof IMask?(this._initMaskDate(),this._initMaskDateChars(),this._initMaskHour(),this._initMaskPhoneInternational(),this._initMaskPhoneDomestic(),this._initMaskNumber(),this._initMaskInMask(),this._initCreditCardMask(),this._initMaskComplex(),this._initMaskFunction(),this._initMaskValueLog(),this._initMaskTopLabel(),this._initMaskFilled()):console.log("IMask is undefined!")}_initMaskDate(){null!==document.querySelector("#dateMask")&&IMask(document.querySelector("#dateMask"),{mask:Date,min:new Date(1900,0,1),max:new Date(2020,0,1),lazy:!1}),null!==document.querySelector("#dateInitialMask")&&IMask(document.querySelector("#dateInitialMask"),{mask:Date,min:new Date(1900,0,1),max:new Date(2020,0,1),lazy:!1})}_initMaskDateChars(){null!==document.querySelector("#dateCharMask")&&IMask(document.querySelector("#dateCharMask"),{mask:Date,lazy:!1,autofix:!0,blocks:{d:{mask:IMask.MaskedRange,placeholderChar:"m",from:1,to:12,maxLength:2},m:{mask:IMask.MaskedRange,placeholderChar:"d",from:1,to:31,maxLength:2},Y:{mask:IMask.MaskedRange,placeholderChar:"y",from:1900,to:(new Date).getFullYear(),maxLength:4}}})}_initMaskHour(){null!==document.querySelector("#hourMask")&&IMask(document.querySelector("#hourMask"),{overwrite:!0,autofix:!0,mask:"HH:MM",lazy:!1,blocks:{HH:{mask:IMask.MaskedRange,placeholderChar:"_",from:0,to:23,maxLength:2},MM:{mask:IMask.MaskedRange,placeholderChar:"_",from:0,to:59,maxLength:2}}}),null!==document.querySelector("#hourMaskAMPM")&&IMask(document.querySelector("#hourMaskAMPM"),{overwrite:!0,autofix:!0,mask:"HH:MM XX",lazy:!1,blocks:{HH:{mask:IMask.MaskedRange,placeholderChar:"_",from:1,to:12,maxLength:2},MM:{mask:IMask.MaskedRange,placeholderChar:"_",from:0,to:59,maxLength:2},XX:{mask:IMask.MaskedEnum,placeholderChar:"_",enum:["AM","PM","am","pm","Am","Pm"]}}})}_initMaskPhoneInternational(){null!==document.querySelector("#hourInternationalMask")&&IMask(document.querySelector("#hourInternationalMask"),{mask:"+{46}(000) 000-00-00",lazy:!1})}_initMaskPhoneDomestic(){null!==document.querySelector("#hourDomesticMask")&&IMask(document.querySelector("#hourDomesticMask"),{mask:"(000) 000-00-00",lazy:!1})}_initMaskNumber(){null!==document.querySelector("#maskNumber")&&IMask(document.querySelector("#maskNumber"),{mask:Number}),null!==document.querySelector("#maskNumberLarge")&&IMask(document.querySelector("#maskNumberLarge"),{mask:Number,min:-1e4,max:1e4,thousandsSeparator:"."}),null!==document.querySelector("#maskNumberSmall")&&IMask(document.querySelector("#maskNumberSmall"),{mask:Number,min:0,max:9})}_initMaskInMask(){null!==document.querySelector("#maskCurrency")&&IMask(document.querySelector("#maskCurrency"),{mask:"$ num",blocks:{num:{mask:Number,thousandsSeparator:"."}}})}_initCreditCardMask(){null!==document.querySelector("#maskCreditCard")&&IMask(document.querySelector("#maskCreditCard"),{mask:"0000-0000-0000-0000",lazy:!1})}_initMaskComplex(){null!==document.querySelector("#maskComplex")&&IMask(document.querySelector("#maskComplex"),{mask:"Ple\\ase fill ye\\ar 19YY, month MM \\and v\\alue VL",lazy:!1,blocks:{YY:{mask:"00"},MM:{mask:IMask.MaskedRange,from:1,to:12},VL:{mask:IMask.MaskedEnum,enum:["TV","HD","VR"]}}})}_initMaskFunction(){null!==document.querySelector("#maskFunction")&&IMask(document.querySelector("#maskFunction"),{mask:function(e){return/^\d*$/.test(e)&&e.split("").every((function(a,t){var n=e[t-1];return!n||n<a}))}})}_initMaskTopLabel(){null!==document.querySelector("#maskTopLabel")&&IMask(document.querySelector("#maskTopLabel"),{mask:Date,min:new Date(1900,0,1),max:new Date(2020,0,1),lazy:!1})}_initMaskFilled(){null!==document.querySelector("#maskFilled")&&IMask(document.querySelector("#maskFilled"),{mask:Date,min:new Date(1900,0,1),max:new Date(2020,0,1),lazy:!1})}_initMaskFilled(){null!==document.querySelector("#maskFloatingLabel")&&IMask(document.querySelector("#maskFloatingLabel"),{mask:Date,min:new Date(1900,0,1),max:new Date(2020,0,1),lazy:!1})}_initMaskValueLog(){if(document.getElementById("maskGetValue")){const e=IMask(document.getElementById("maskGetValue"),{mask:"(000) 000-00-00",lazy:!1});document.getElementById("maskGetValue").setAttribute("mask",e),document.getElementById("logButton").addEventListener("click",(a=>{console.log(e.value)})),document.getElementById("logUnmaskedButton").addEventListener("click",(a=>{console.log(e.unmaskedValue)}))}}}