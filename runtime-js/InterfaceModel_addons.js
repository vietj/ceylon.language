atr$(InterfaceModel$meta$model.$$.prototype,'declaration',function(){
if (this._decl)return this._decl;
var mm = getrtmm$$(this.tipo);
var _m = typeof(mm.mod)==='function'?mm.mod():mm.mod;
this._decl = OpenInterface(getModules$meta().find(_m['$mod-name'],_m['$mod-version']).findPackage(mm.d[0]), this.tipo);
return this._decl;
},undefined,function(){return{mod:$CCMM$,$t:{t:InterfaceDeclaration$meta$declaration},$cont:InterfaceModel$meta$model,an:function(){return[shared(),actual()];},d:['ceylon.language.meta.model','InterfaceModel','$at','declaration']};});

InterfaceModel$meta$model.$$.prototype.equals=function(o){
return is$(o,{t:AppliedInterface}) && (o.tipo$2||o.tipo)==this.tipo && this.typeArguments.equals(o.typeArguments);
};
InterfaceModel$meta$model.$$.prototype.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Boolean},d:['$','Object','$m','equals'],ps:[{nm:'other',$t:{t:$_Object}}],$cont:InterfaceModel$meta$model};}
