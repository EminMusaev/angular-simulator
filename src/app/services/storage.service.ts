import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    setValue<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getValue<T>(key: string): T | null {
        const data = localStorage.getItem(key);

        if (!data) {
            return null;
        }

        return JSON.parse(data) as T;
    }

    removeValue(key: string): void {
        localStorage.removeItem(key);
    }

    clear(): void {
        localStorage.clear();
    }

}