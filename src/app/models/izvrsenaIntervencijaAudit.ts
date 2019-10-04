export class IzvrsenaIntervencijaAudit {
    private id: number;
    private radnoMjesto: Object;
    private pacijent: Object;
    private zaposleni: Object;
    private createdBy: string;
    private createdDate: Date;
    private lastModifiedBy: string;
    private lastModifiedDate: Date;

    constructor(data: any) {
        this.id = data.id || null;
        this.radnoMjesto = data.radno_mjesto || null;
        this.pacijent = data.pacijent || null;
        this.zaposleni = data.zaposleni || null;
        this.createdBy = data.createdBy || null;
        this.createdDate = data.createdDate || null;
        this.lastModifiedBy = data.lastModifiedBy || null;
        this.lastModifiedDate = data.lastModifiedDate || null;
    }   
}