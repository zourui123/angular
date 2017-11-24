import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormService{
    constructor(private http:Http){}
    public getList(){
        this.http.get('../../../assets/list.json')
        .map(res => res.json())
        .catch( error => Observable.throw(error))
        .subscribe( data => {
            console.log(data)
        })
        
    }
}