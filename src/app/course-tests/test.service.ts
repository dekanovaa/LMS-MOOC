import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Test } from "./test.model";



@Injectable({
    providedIn: 'root'
})

export class TestService {
    private apiUrl = 'http://localhost:3000/tests';


    constructor(private http: HttpClient) {}


    getTests(): Observable<Test[]> {
        return this.http.get<Test[]>(this.apiUrl);
    }
}