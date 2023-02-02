import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router,CanActivateChild } from '@angular/router'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private authServise:AuthService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.authServise.isAuthenticated()
            .then(
                (authenticates:boolean) => {
                    if (authenticates){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
                }
            );
        }
    
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.canActivate(route,state);
        }
}