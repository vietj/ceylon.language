(function(define) {
    define(function(rq$, ex$, module) {
//the Ceylon language module
//#METAMODEL

//#COMPILE core_functions.js,Anything.js,Object,Null,Identifiable,Callable,callables.js,dynamic_functions.js
//#COMPILE comprehensions.js,Basic,Throwable,printStackTrace,Exception,Comparison,identityHash,impl/rethrow,impl/bases
//#Anything
//#COMPILE Iterable,Correspondence,Finished,Sequential,Sequence,Empty
//#native Boolean
//#native Callable
//#COMPILE Binary,Usable,Destroyable,Obtainable,Comparable,Invertible,Summable,Ordinal,Enumerable,Numeric,Exponentiable,Integral,Scalable,Number,numbers.js,OverflowException,InitializationError,Resource,Ranged,Iterator,Collection,Category,List,Array,sequences.js,ArraySequence,Tuple,ChainedIterator,CycledIterator,Entry,Byte
//#Number
//#COMPILE Set,Range,Span,Measure,Singleton,AssertionError,Map,String,strings.js,Character
//#COMPILE any,byDecreasing,byIncreasing,byItem,byKey,count,emptyOrSingleton,curry,apply,comparing,functions
//#COMPILE every,forItem,forKey,concatenate,expand,interleave,corresponding,loop,largest,max,min,smallest,sum,product,pairs,zip,unzip,print,nothing
//#COMPILE identical,compose,shuffle,flatten,unflatten,plus,times,sort,and,or,not,arrayOfSize
//#metamodel
//#COMPILE Annotated,Annotation,ConstrainedAnnotation,OptionalAnnotation,SequencedAnnotation
//#COMPILE meta/annotations,meta/metamodel,meta/optionalAnnotation,meta/sequencedAnnotations,modules.js,meta/modules
//#COMPILE meta/model/ValueModel,meta/model/ClassOrInterface,ClassOrInterface_addons.js,meta/model/ClassModel,ClassModel_addons.js,meta/model/Class,meta/model/FunctionModel,FunctionModel_addons.js,meta/model/Function,meta/model/Method,meta/model/InterfaceModel,InterfaceModel_addons.js,meta/model/Interface,meta/model/IntersectionType,meta/model/Member,Member_addons.js,meta/model/MemberClass,meta/model/MemberInterface,meta/model/Attribute,meta/model/Model,meta/model/Type,meta/model/UnionType,meta/model/Value,meta/model/nothingType,meta/model/TypeApplicationException,meta/model/InvocationException,meta/model/MutationException,meta/model/IncompatibleTypeException,meta/model/Generic,meta/model/Applicable
//#COMPILE meta/declaration/Declaration,meta/declaration/AnnotatedDeclaration,annotated_declaration.js,meta/declaration/NestableDeclaration,NestableDeclaration_addons.js,meta/declaration/GenericDeclaration,GenericDeclaration_addons.js,meta/declaration/ClassOrInterfaceDeclaration,meta/declaration/FunctionalDeclaration,declaration_addons.js,meta/declaration/FunctionOrValueDeclaration,meta/declaration/ValueDeclaration,meta/declaration/ClassDeclaration,meta/declaration/FunctionDeclaration,meta/declaration/InterfaceDeclaration,meta/declaration/ModuleAndPackage,meta/declaration/OpenIntersection,meta/declaration/OpenClassOrInterfaceType,OpenClassOrInterfaceType_addons.js,meta/declaration/OpenClassType,meta/declaration/OpenInterfaceType,meta/declaration/OpenType,meta/declaration/OpenTypeVariable,meta/declaration/OpenUnion,meta/declaration/SetterDeclaration,meta/declaration/TypeParameter,meta/declaration/TypedDeclaration,meta/declaration/nothingType,meta/declaration/AliasDeclaration,meta/declaration/Variance
//#COMPILE jsint/Importa,jsint/Paquete,jsint/Modulo,jsint/FreeUnion,jsint/FreeIntersection,jsint/OpenTvar,jsint/OpenTypeParam,jsint/OpenAlias,jsint/AppliedUnionType,jsint/AppliedIntersectionType,jsint/OpenClass
//#COMPILE annotations
//#COMPILE Boolean.js,jsint/TpMap,tuples.js,metamodel_functions1.js,metamodel_functions2.js,jsint/JsResource,appliedtypes.js,opentypes.js
//#COMPILE module,package,meta/package,meta/model/package,meta/declaration/package
//#COMPILE process.js,process,language,system,operatingSystem,runtime,parseInteger,parseFloat,formatInteger,parseBoolean,className

function NatErr(e) {
    var that = new NatErr.$$;
    var msg;
    if (typeof e === 'string') {
        msg = e;
    } else if (e) {
        msg = e.toString();
    } else {
        msg = "Native JavaScript Error";
    }
    Throwable(msg,null,that);
    return that;
}
initTypeProto(NatErr, 'ceylon.language::NativeError', $init$Throwable());
NatErr.$crtmm$=function(){return{nm:'NativeError',mt:'c',ps:[{$t:{t:Throwable},nm:'src',mt:'prm'}],pa:1,mod:$CCMM$,d:['$','Throwable']};}
ex$.Nothing=Nothing;
ex$.getTrue=getTrue;
ex$.getFalse=getFalse;
ex$.NatErr=NatErr;
    });
}(typeof define==='function' && define.amd ? 
    define : function (factory) {
    if (typeof exports!=='undefined') {
        factory(require, exports, module);
    } else {
        throw "no module loader";
    }
}));
