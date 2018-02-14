declare var window;

export class StorageService {
    _drive: string = 'sessionStorage';

    drive(): string {
        return this._drive;
    }

    setDrive(v?: string): string {
        return this._drive = v + 'Storage';
    }

    get(k: string): any {
        return JSON.parse(window[this.drive()].getItem(k));
    }

    set(k: string, v: any): void {
        window[this.drive()].setItem(k, JSON.stringify(v));
    }

    clear(): void {
        window[this.drive()].clear();
    }
}