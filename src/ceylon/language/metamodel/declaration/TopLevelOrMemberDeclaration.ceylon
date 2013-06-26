import ceylon.language.metamodel{Annotated}

shared interface TopLevelOrMemberDeclaration of AttributeDeclaration |
                                                FunctionDeclaration |
                                                ClassOrInterfaceDeclaration
        satisfies AnnotatedDeclaration {
    
    // FIXME: that name sucks
    shared formal Package packageContainer;
    
    shared formal Boolean toplevel;
}