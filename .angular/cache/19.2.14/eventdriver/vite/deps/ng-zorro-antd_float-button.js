import {
  fadeMotion
} from "./chunk-AAUQUBUO.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-CDZO2PWK.js";
import "./chunk-7L7UJD6V.js";
import {
  NzDestroyService,
  NzScrollService
} from "./chunk-JI6TI5H6.js";
import {
  NzStringTemplateOutletDirective
} from "./chunk-YS6TWBZE.js";
import {
  NzWaveDirective
} from "./chunk-GB2YPLZ7.js";
import "./chunk-HZAKHPNR.js";
import "./chunk-33ZF4RHJ.js";
import {
  NzTransitionPatchDirective
} from "./chunk-UBBTNIJM.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-UQJOJ3O3.js";
import "./chunk-BQ76GOFF.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-5JFCKX5B.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-GLON2OEV.js";
import {
  fromEventOutsideAngular
} from "./chunk-JD5ARZ2F.js";
import {
  Directionality
} from "./chunk-U7BXZ25W.js";
import "./chunk-YZD6PEOJ.js";
import "./chunk-J6QLJRAM.js";
import "./chunk-RFUBOMNK.js";
import "./chunk-DOHATWZ5.js";
import {
  NgTemplateOutlet
} from "./chunk-KVYAQUL2.js";
import {
  DOCUMENT
} from "./chunk-ZBOIHUSL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LJWLWQDP.js";
import "./chunk-QCX4XGGK.js";
import "./chunk-3LZ7TQJT.js";
import {
  Subject,
  Subscription,
  __esDecorate,
  __runInitializers,
  debounceTime,
  takeUntil
} from "./chunk-3SRVZXQZ.js";
import "./chunk-3OV72XIM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-float-button.mjs
function NzFloatButtonContentComponent_Conditional_2_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzFloatButtonContentComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzFloatButtonContentComponent_Conditional_2_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzIcon);
  }
}
function NzFloatButtonContentComponent_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.nzDescription, " ");
  }
}
function NzFloatButtonContentComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzFloatButtonContentComponent_Conditional_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzFloatButtonContentComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzFloatButtonContentComponent_Conditional_2_Conditional_0_Template, 2, 1, "div", 2)(1, NzFloatButtonContentComponent_Conditional_2_Conditional_1_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzDescription && ctx_r0.nzShape === "square" ? 1 : -1);
  }
}
function NzFloatButtonContentComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "nz-icon", 6);
    ɵɵelementEnd();
  }
}
function NzFloatButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function NzFloatButtonComponent_Conditional_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzOnClick.emit(true));
    });
    ɵɵelement(1, "nz-float-button-content", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-float-btn-default", ctx_r1.nzType === "default");
    ɵɵproperty("target", ctx_r1.nzTarget)("href", ctx_r1.nzHref, ɵɵsanitizeUrl)("nzType", ctx_r1.nzType);
    ɵɵadvance();
    ɵɵproperty("nzIcon", ctx_r1.nzIcon)("nzDescription", ctx_r1.nzDescription)("nzShape", ctx_r1.nzShape);
  }
}
function NzFloatButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function NzFloatButtonComponent_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzOnClick.emit(true));
    });
    ɵɵelement(1, "nz-float-button-content", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-float-btn-default", ctx_r1.nzType === "default");
    ɵɵproperty("nzType", ctx_r1.nzType);
    ɵɵadvance();
    ɵɵproperty("nzIcon", ctx_r1.nzIcon)("nzDescription", ctx_r1.nzDescription)("nzShape", ctx_r1.nzShape);
  }
}
var _c0 = ["backTop"];
function NzFloatButtonTopComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 3);
  }
}
var _c1 = ["*"];
function NzFloatButtonGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-float-btn-group-wrap", !!ctx_r0.nzTrigger);
    ɵɵproperty("@fadeMotion", void 0);
  }
}
function NzFloatButtonGroupComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-float-button", 4);
    ɵɵlistener("nzOnClick", function NzFloatButtonGroupComponent_Conditional_1_Conditional_0_Template_nz_float_button_nzOnClick_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.clickOpenMenu());
    })("mouseover", function NzFloatButtonGroupComponent_Conditional_1_Conditional_0_Template_nz_float_button_mouseover_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.hoverOpenMenu());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r0.nzType)("nzIcon", ctx_r0.nzIcon)("nzShape", ctx_r0.nzShape)("nzDescription", ctx_r0.nzDescription);
  }
}
function NzFloatButtonGroupComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-float-button", 5);
    ɵɵlistener("nzOnClick", function NzFloatButtonGroupComponent_Conditional_1_Conditional_1_Template_nz_float_button_nzOnClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.clickCloseMenu());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const close_r4 = ɵɵreference(3);
    ɵɵproperty("nzType", ctx_r0.nzType)("nzIcon", close_r4)("nzShape", ctx_r0.nzShape);
  }
}
function NzFloatButtonGroupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzFloatButtonGroupComponent_Conditional_1_Conditional_0_Template, 1, 4, "nz-float-button", 2)(1, NzFloatButtonGroupComponent_Conditional_1_Conditional_1_Template, 1, 3, "nz-float-button", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.isOpen && !ctx_r0.nzOpen ? 0 : 1);
  }
}
function NzFloatButtonGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 6);
  }
}
var NzFloatButtonContentComponent = class _NzFloatButtonContentComponent {
  nzIcon = null;
  nzDescription = null;
  nzShape = "circle";
  static ɵfac = function NzFloatButtonContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFloatButtonContentComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFloatButtonContentComponent,
    selectors: [["nz-float-button-content"]],
    inputs: {
      nzIcon: "nzIcon",
      nzDescription: "nzDescription",
      nzShape: "nzShape"
    },
    exportAs: ["nzFloatButtonContent"],
    decls: 4,
    vars: 1,
    consts: [[1, "ant-float-btn-body"], [1, "ant-float-btn-content"], [1, "ant-float-btn-icon"], [1, "ant-float-btn-description"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], ["nzType", "file-text", "nzTheme", "outline"]],
    template: function NzFloatButtonContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "div", 1);
        ɵɵtemplate(2, NzFloatButtonContentComponent_Conditional_2_Template, 2, 2)(3, NzFloatButtonContentComponent_Conditional_3_Template, 2, 0, "div", 2);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.nzDescription || ctx.nzIcon ? 2 : 3);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet, NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFloatButtonContentComponent, [{
    type: Component,
    args: [{
      selector: "nz-float-button-content",
      exportAs: "nzFloatButtonContent",
      imports: [NzIconModule, NgTemplateOutlet, NzStringTemplateOutletDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-float-btn-body">
      <div class="ant-float-btn-content">
        @if (nzDescription || nzIcon) {
          @if (nzIcon) {
            <div class="ant-float-btn-icon">
              <ng-template [ngTemplateOutlet]="nzIcon"></ng-template>
            </div>
          }
          @if (nzDescription && nzShape === 'square') {
            <div class="ant-float-btn-description">
              <ng-container *nzStringTemplateOutlet="nzDescription">
                {{ nzDescription }}
              </ng-container>
            </div>
          }
        } @else {
          <div class="ant-float-btn-icon">
            <nz-icon nzType="file-text" nzTheme="outline" />
          </div>
        }
      </div>
    </div>
  `
    }]
  }], null, {
    nzIcon: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }]
  });
})();
var NzFloatButtonComponent = class _NzFloatButtonComponent {
  destroy$;
  directionality;
  cdr;
  nzHref = null;
  nzTarget = null;
  nzType = "default";
  nzShape = "circle";
  nzIcon = null;
  nzDescription = null;
  nzOnClick = new EventEmitter();
  dir = "ltr";
  constructor(destroy$, directionality, cdr) {
    this.destroy$ = destroy$;
    this.directionality = directionality;
    this.cdr = cdr;
    this.dir = this.directionality.value;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static ɵfac = function NzFloatButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFloatButtonComponent)(ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFloatButtonComponent,
    selectors: [["nz-float-button"]],
    hostAttrs: [1, "ant-float-btn"],
    hostVars: 6,
    hostBindings: function NzFloatButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-float-btn-circle", ctx.nzShape === "circle")("ant-float-btn-square", ctx.nzShape === "square")("ant-float-btn-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzHref: "nzHref",
      nzTarget: "nzTarget",
      nzType: "nzType",
      nzShape: "nzShape",
      nzIcon: "nzIcon",
      nzDescription: "nzDescription"
    },
    outputs: {
      nzOnClick: "nzOnClick"
    },
    exportAs: ["nzFloatButton"],
    features: [ɵɵProvidersFeature([NzDestroyService])],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "ant-float-btn-inner", 3, "target", "href", "nzType", "ant-float-btn-default"], ["nz-button", "", 1, "ant-float-btn-inner", 3, "nzType", "ant-float-btn-default"], ["nz-button", "", 1, "ant-float-btn-inner", 3, "click", "target", "href", "nzType"], [3, "nzIcon", "nzDescription", "nzShape"], ["nz-button", "", 1, "ant-float-btn-inner", 3, "click", "nzType"]],
    template: function NzFloatButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, NzFloatButtonComponent_Conditional_0_Template, 2, 8, "a", 0)(1, NzFloatButtonComponent_Conditional_1_Template, 2, 6, "button", 1);
      }
      if (rf & 2) {
        ɵɵconditional(!!ctx.nzHref ? 0 : 1);
      }
    },
    dependencies: [NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzFloatButtonContentComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFloatButtonComponent, [{
    type: Component,
    args: [{
      selector: "nz-float-button",
      exportAs: "nzFloatButton",
      imports: [NzButtonModule, NzFloatButtonContentComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (!!nzHref) {
      <a
        [target]="nzTarget"
        [href]="nzHref"
        nz-button
        [nzType]="nzType"
        [class.ant-float-btn-default]="nzType === 'default'"
        class="ant-float-btn-inner"
        (click)="nzOnClick.emit(true)"
      >
        <nz-float-button-content
          [nzIcon]="nzIcon"
          [nzDescription]="nzDescription"
          [nzShape]="nzShape"
        ></nz-float-button-content>
      </a>
    } @else {
      <button
        nz-button
        [nzType]="nzType"
        [class.ant-float-btn-default]="nzType === 'default'"
        class="ant-float-btn-inner"
        (click)="nzOnClick.emit(true)"
      >
        <nz-float-button-content
          [nzIcon]="nzIcon"
          [nzDescription]="nzDescription"
          [nzShape]="nzShape"
        ></nz-float-button-content>
      </button>
    }
  `,
      host: {
        class: "ant-float-btn",
        "[class.ant-float-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-float-btn-square]": `nzShape === 'square'`,
        "[class.ant-float-btn-rtl]": `dir === 'rtl'`
      },
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NzDestroyService
  }, {
    type: Directionality
  }, {
    type: ChangeDetectorRef
  }], {
    nzHref: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzOnClick: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "backTop";
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var NzFloatButtonTopComponent = (() => {
  let _nzVisibilityHeight_decorators;
  let _nzVisibilityHeight_initializers = [];
  let _nzVisibilityHeight_extraInitializers = [];
  return class NzFloatButtonTopComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzVisibilityHeight_decorators = [WithConfig()];
      __esDecorate(null, null, _nzVisibilityHeight_decorators, {
        kind: "field",
        name: "nzVisibilityHeight",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzVisibilityHeight" in obj,
          get: (obj) => obj.nzVisibilityHeight,
          set: (obj, value) => {
            obj.nzVisibilityHeight = value;
          }
        },
        metadata: _metadata
      }, _nzVisibilityHeight_initializers, _nzVisibilityHeight_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    nzConfigService;
    scrollSrv;
    platform;
    ngZone;
    cdr;
    destroy$;
    directionality;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    scrollListenerDestroy$ = new Subject();
    target = null;
    visible = false;
    dir = "ltr";
    nzHref = null;
    nzType = "default";
    nzShape = "circle";
    nzIcon = null;
    nzDescription = null;
    nzTemplate;
    nzVisibilityHeight = __runInitializers(this, _nzVisibilityHeight_initializers, 400);
    nzTarget = __runInitializers(this, _nzVisibilityHeight_extraInitializers);
    nzDuration = 450;
    nzOnClick = new EventEmitter();
    set backTop(backTop) {
      if (backTop) {
        this.backTopClickSubscription.unsubscribe();
        this.backTopClickSubscription = fromEventOutsideAngular(backTop.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.scrollSrv.scrollTo(this.getTarget(), 0, {
            duration: this.nzDuration
          });
          if (this.nzOnClick.observers.length) {
            this.ngZone.run(() => this.nzOnClick.emit(true));
          }
        });
      }
    }
    doc = inject(DOCUMENT);
    backTopClickSubscription = Subscription.EMPTY;
    constructor(nzConfigService, scrollSrv, platform, ngZone, cdr, destroy$, directionality) {
      this.nzConfigService = nzConfigService;
      this.scrollSrv = scrollSrv;
      this.platform = platform;
      this.ngZone = ngZone;
      this.cdr = cdr;
      this.destroy$ = destroy$;
      this.directionality = directionality;
      this.dir = this.directionality.value;
    }
    ngOnInit() {
      this.registerScrollEvent();
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    getTarget() {
      return this.target || window;
    }
    handleScroll() {
      if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
        return;
      }
      this.visible = !this.visible;
      this.cdr.detectChanges();
    }
    registerScrollEvent() {
      if (!this.platform.isBrowser) {
        return;
      }
      this.scrollListenerDestroy$.next();
      this.handleScroll();
      fromEventOutsideAngular(this.getTarget(), "scroll", passiveEventListenerOptions).pipe(debounceTime(50), takeUntil(this.scrollListenerDestroy$)).subscribe(() => this.handleScroll());
    }
    ngOnDestroy() {
      this.scrollListenerDestroy$.next();
      this.scrollListenerDestroy$.complete();
    }
    detectChanges() {
      this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
      const {
        nzTarget
      } = changes;
      if (nzTarget) {
        this.target = typeof this.nzTarget === "string" ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
        this.registerScrollEvent();
      }
    }
    static ɵfac = function NzFloatButtonTopComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzFloatButtonTopComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(Directionality));
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzFloatButtonTopComponent2,
      selectors: [["nz-float-button-top"]],
      viewQuery: function NzFloatButtonTopComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.backTop = _t.first);
        }
      },
      hostAttrs: [1, "ant-float-btn", "ant-float-btn-top"],
      hostVars: 8,
      hostBindings: function NzFloatButtonTopComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-float-btn-circle", ctx.nzShape === "circle")("ant-float-btn-hidden", !ctx.visible)("ant-float-btn-square", ctx.nzShape === "square")("ant-float-btn-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzHref: "nzHref",
        nzType: "nzType",
        nzShape: "nzShape",
        nzIcon: "nzIcon",
        nzDescription: "nzDescription",
        nzTemplate: "nzTemplate",
        nzVisibilityHeight: [2, "nzVisibilityHeight", "nzVisibilityHeight", numberAttribute],
        nzTarget: "nzTarget",
        nzDuration: [2, "nzDuration", "nzDuration", numberAttribute]
      },
      outputs: {
        nzOnClick: "nzOnClick"
      },
      exportAs: ["nzFloatButtonTop"],
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature],
      decls: 5,
      vars: 6,
      consts: [["backTop", ""], ["top", ""], [3, "nzIcon", "nzDescription", "nzHref", "nzType", "nzShape"], ["nzType", "vertical-align-top", "nzTheme", "outline"]],
      template: function NzFloatButtonTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", null, 0);
          ɵɵelement(2, "nz-float-button", 2);
          ɵɵtemplate(3, NzFloatButtonTopComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const top_r1 = ɵɵreference(4);
          ɵɵproperty("@fadeMotion", void 0);
          ɵɵadvance(2);
          ɵɵproperty("nzIcon", ctx.nzIcon || top_r1)("nzDescription", ctx.nzDescription)("nzHref", ctx.nzHref)("nzType", ctx.nzType)("nzShape", ctx.nzShape);
        }
      },
      dependencies: [NzFloatButtonComponent, NzIconModule, NzIconDirective],
      encapsulation: 2,
      data: {
        animation: [fadeMotion]
      },
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFloatButtonTopComponent, [{
    type: Component,
    args: [{
      selector: "nz-float-button-top",
      exportAs: "nzFloatButtonTop",
      imports: [NzFloatButtonComponent, NzIconModule],
      animations: [fadeMotion],
      template: `
    <div #backTop @fadeMotion>
      <nz-float-button
        [nzIcon]="nzIcon || top"
        [nzDescription]="nzDescription"
        [nzHref]="nzHref"
        [nzType]="nzType"
        [nzShape]="nzShape"
      ></nz-float-button>
      <ng-template #top>
        <nz-icon nzType="vertical-align-top" nzTheme="outline" />
      </ng-template>
    </div>
  `,
      host: {
        class: "ant-float-btn ant-float-btn-top",
        "[class.ant-float-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-float-btn-hidden]": `!visible`,
        "[class.ant-float-btn-square]": `nzShape === 'square'`,
        "[class.ant-float-btn-rtl]": `dir === 'rtl'`
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: Directionality
  }], {
    nzHref: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzTemplate: [{
      type: Input
    }],
    nzVisibilityHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzTarget: [{
      type: Input
    }],
    nzDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzOnClick: [{
      type: Output
    }],
    backTop: [{
      type: ViewChild,
      args: ["backTop", {
        static: false
      }]
    }]
  });
})();
var NzFloatButtonGroupComponent = class _NzFloatButtonGroupComponent {
  destroy$;
  directionality;
  cdr;
  nzFloatButtonComponent;
  nzFloatButtonTopComponents;
  nzHref = null;
  nzTarget = null;
  nzType = "default";
  nzIcon = null;
  nzDescription = null;
  nzShape = "circle";
  nzTrigger = null;
  nzOpen = null;
  nzOnOpenChange = new EventEmitter();
  isOpen = false;
  dir = "ltr";
  constructor(destroy$, directionality, cdr) {
    this.destroy$ = destroy$;
    this.directionality = directionality;
    this.cdr = cdr;
    this.dir = this.directionality.value;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    if (this.nzFloatButtonComponent) {
      this.nzFloatButtonComponent.forEach((item) => {
        item.nzShape = this.nzShape;
      });
    }
    if (this.nzFloatButtonTopComponents) {
      this.nzFloatButtonTopComponents.forEach((item) => {
        item.nzShape = this.nzShape;
        item.detectChanges();
      });
    }
  }
  clickOpenMenu() {
    if (this.nzTrigger !== "click" || this.nzOpen !== null) {
      return;
    }
    this.isOpen = true;
    this.nzOnOpenChange.emit(true);
    this.cdr.markForCheck();
  }
  hoverOpenMenu() {
    if (this.nzTrigger !== "hover" || this.nzOpen !== null) {
      return;
    }
    this.isOpen = true;
    this.nzOnOpenChange.emit(true);
    this.cdr.markForCheck();
  }
  clickCloseMenu() {
    if (this.nzTrigger !== "click") {
      return;
    }
    this.isOpen = false;
    this.nzOnOpenChange.emit(false);
    this.cdr.markForCheck();
  }
  hoverCloseMenu() {
    if (this.nzTrigger !== "hover" || typeof this.nzOpen === "boolean") {
      return;
    }
    this.isOpen = false;
    this.nzOnOpenChange.emit(false);
    this.cdr.markForCheck();
  }
  static ɵfac = function NzFloatButtonGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFloatButtonGroupComponent)(ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFloatButtonGroupComponent,
    selectors: [["nz-float-button-group"]],
    contentQueries: function NzFloatButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzFloatButtonComponent, 4);
        ɵɵcontentQuery(dirIndex, NzFloatButtonTopComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzFloatButtonComponent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzFloatButtonTopComponents = _t);
      }
    },
    hostAttrs: [1, "ant-float-btn-group"],
    hostVars: 10,
    hostBindings: function NzFloatButtonGroupComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseleave", function NzFloatButtonGroupComponent_mouseleave_HostBindingHandler() {
          return ctx.hoverCloseMenu();
        });
      }
      if (rf & 2) {
        ɵɵclassProp("ant-float-btn-group-circle", ctx.nzShape === "circle")("ant-float-btn-group-circle-shadow", ctx.nzShape === "circle")("ant-float-btn-group-square", ctx.nzShape === "square")("ant-float-btn-group-square-shadow", ctx.nzShape === "square" && !ctx.nzTrigger)("ant-float-btn-group-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzHref: "nzHref",
      nzTarget: "nzTarget",
      nzType: "nzType",
      nzIcon: "nzIcon",
      nzDescription: "nzDescription",
      nzShape: "nzShape",
      nzTrigger: "nzTrigger",
      nzOpen: "nzOpen"
    },
    outputs: {
      nzOnOpenChange: "nzOnOpenChange"
    },
    exportAs: ["nzFloatButtonGroup"],
    features: [ɵɵProvidersFeature([NzDestroyService])],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 2,
    consts: [["close", ""], [3, "ant-float-btn-group-wrap"], [3, "nzType", "nzIcon", "nzShape", "nzDescription"], [3, "nzType", "nzIcon", "nzShape"], [3, "nzOnClick", "mouseover", "nzType", "nzIcon", "nzShape", "nzDescription"], [3, "nzOnClick", "nzType", "nzIcon", "nzShape"], ["nzType", "close", "nzTheme", "outline"]],
    template: function NzFloatButtonGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzFloatButtonGroupComponent_Conditional_0_Template, 2, 3, "div", 1)(1, NzFloatButtonGroupComponent_Conditional_1_Template, 2, 1)(2, NzFloatButtonGroupComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.nzTrigger || ctx.isOpen || ctx.nzOpen === true ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(!!ctx.nzTrigger ? 1 : -1);
      }
    },
    dependencies: [NzFloatButtonComponent, NzIconModule, NzIconDirective],
    encapsulation: 2,
    data: {
      animation: [fadeMotion]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFloatButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-float-button-group",
      exportAs: "nzFloatButtonGroup",
      imports: [NzFloatButtonComponent, NzIconModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [fadeMotion],
      template: `
    @if (!nzTrigger || isOpen || nzOpen === true) {
      <div [class.ant-float-btn-group-wrap]="!!nzTrigger" @fadeMotion><ng-content></ng-content></div>
    }
    @if (!!nzTrigger) {
      @if (!isOpen && !nzOpen) {
        <nz-float-button
          [nzType]="nzType"
          [nzIcon]="nzIcon"
          [nzShape]="nzShape"
          [nzDescription]="nzDescription"
          (nzOnClick)="clickOpenMenu()"
          (mouseover)="hoverOpenMenu()"
        ></nz-float-button>
      } @else {
        <nz-float-button
          [nzType]="nzType"
          [nzIcon]="close"
          [nzShape]="nzShape"
          (nzOnClick)="clickCloseMenu()"
        ></nz-float-button>
      }
    }
    <ng-template #close>
      <nz-icon nzType="close" nzTheme="outline" />
    </ng-template>
  `,
      host: {
        class: "ant-float-btn-group",
        "(mouseleave)": "hoverCloseMenu()",
        "[class.ant-float-btn-group-circle]": `nzShape === 'circle'`,
        "[class.ant-float-btn-group-circle-shadow]": `nzShape === 'circle'`,
        "[class.ant-float-btn-group-square]": `nzShape === 'square'`,
        "[class.ant-float-btn-group-square-shadow]": `nzShape === 'square' && !nzTrigger`,
        "[class.ant-float-btn-group-rtl]": `dir === 'rtl'`
      },
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NzDestroyService
  }, {
    type: Directionality
  }, {
    type: ChangeDetectorRef
  }], {
    nzFloatButtonComponent: [{
      type: ContentChildren,
      args: [NzFloatButtonComponent]
    }],
    nzFloatButtonTopComponents: [{
      type: ContentChildren,
      args: [NzFloatButtonTopComponent]
    }],
    nzHref: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzOnOpenChange: [{
      type: Output
    }]
  });
})();
var NzFloatButtonModule = class _NzFloatButtonModule {
  static ɵfac = function NzFloatButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFloatButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzFloatButtonModule,
    imports: [NzFloatButtonComponent, NzFloatButtonGroupComponent, NzFloatButtonTopComponent, NzFloatButtonContentComponent],
    exports: [NzFloatButtonComponent, NzFloatButtonGroupComponent, NzFloatButtonTopComponent, NzFloatButtonContentComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzFloatButtonComponent, NzFloatButtonGroupComponent, NzFloatButtonTopComponent, NzFloatButtonContentComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFloatButtonModule, [{
    type: NgModule,
    args: [{
      exports: [NzFloatButtonComponent, NzFloatButtonGroupComponent, NzFloatButtonTopComponent, NzFloatButtonContentComponent],
      imports: [NzFloatButtonComponent, NzFloatButtonGroupComponent, NzFloatButtonTopComponent, NzFloatButtonContentComponent]
    }]
  }], null, null);
})();
export {
  NzFloatButtonComponent,
  NzFloatButtonContentComponent,
  NzFloatButtonGroupComponent,
  NzFloatButtonModule,
  NzFloatButtonTopComponent
};
//# sourceMappingURL=ng-zorro-antd_float-button.js.map
