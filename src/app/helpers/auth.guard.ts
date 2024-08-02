import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account.service";

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate, CanActivateChild {
  /**
   *
   */
  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.accountService.userValue;
    if (user) {
      return true;
    }

    this.router.navigate(['./login'], {
      queryParams:
      {
        returnUrl: state.url
      }
    }
    );
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.canActivate(childRoute, state)
  }
}
