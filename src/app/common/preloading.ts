import { Route,PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/observable/of";

export class MyPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route,fn: () => Observable<any>): Observable<any>{
        return route.data&&route.data.preload?fn():Observable.of(null)
    }
}