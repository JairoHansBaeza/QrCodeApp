/* eslint-disable eol-last */
export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string){
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
    }
    private determinarTipo(){
        const inicioTexto = this.text.substring(0,4);
        switch (inicioTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe-outline';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'map-outline';
                break;
            default:
                this.type = 'undefined';
                this.icon = 'create';
        }
    }
}