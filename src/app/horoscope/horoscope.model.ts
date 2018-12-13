export class Horoscope
{
    public name:string;
    public description:string;
    public imagePath:string;
    public detail:string;
    public rezeki:string;
    public asmara:string;
    public fisik:string;

    constructor(name:string,desc:string,imagePath:string, detail:string, rezeki:string, asmara:string, fisik:string)
    {
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.detail=detail;
        this.rezeki=rezeki;
        this.asmara=asmara;
        this.fisik=fisik;
    }
}