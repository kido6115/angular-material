import { SidenavRoutingModule } from './sidenav-routing.module';

describe('SidenavRoutingModule', () => {
  let sidenavRoutingModule: SidenavRoutingModule;

  beforeEach(() => {
    sidenavRoutingModule = new SidenavRoutingModule();
  });

  it('should create an instance', () => {
    expect(sidenavRoutingModule).toBeTruthy();
  });
});
