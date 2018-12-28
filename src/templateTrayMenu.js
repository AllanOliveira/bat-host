const arquives = require('./arquives')

module.exports = {
    getTemplateTray(app){
        return [
            {label : "Bat Hosts"},
            {type : "separator"},
            {
                label : "Bat Produção" , 
                type:"radio",
                accelerator : "Ctrl+1",
                click : () => {
                    arquives.atualizaHostsLocal('PROD','Bat Produção');
                }
            },
            {
                label : "Bat QA1", 
                type:"radio",
                accelerator : "Ctrl+2",
                click: () => {
                    arquives.atualizaHostsLocal('QA','Bat QA1');
                }
            },
            {
                label : "Bat QA2", 
                type:"radio",
                accelerator : "Ctrl+3",
                click:() => arquives.atualizaHostsLocal('QA','Bat QA2')
            },
            {
                label : "Bat Stage", 
                type:"radio",
                accelerator : "Ctrl+4",
                click:() => arquives.atualizaHostsLocal('STG','Bat Stage')
            },
            {type : "separator"},
            {
                label : "Sair",
                accelerator : "Ctrl+Q",
                click: ()=> app.quit()
                
            }
        ];
    }
}