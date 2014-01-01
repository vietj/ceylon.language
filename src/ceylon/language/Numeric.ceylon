"Abstraction of numeric types with addition, `x + y`, 
 subtraction, `x - y`, multiplication, `x * y`, and 
 division, `x / y`, along with additive inverse `-x`.
 
 A concrete class which implements this interface should be
 a mathematical _ring_. That is:
 
 - both addition, `+`, and multiplication, `*`, should be
   associative and commutative,
 - there should be additive and multiplicative identities,
   denoted `0` and `1` respectively, satisfying `x+0 == x`
   and `x*1 == x`,
 - every instance `x` should have an additive inverse `-x`, 
   satisfying `x + -x == 0`, and
 - multiplication should distribute over addition, 
   satisfying `x*(y+z) == x*y + x*z`.
 
 It is preferred, but not required, that the class be a
 mathematical _field_. That is, in addition to the above:
 
 - every instance `x` should have a multiplicative inverse 
   `1/x`, satisfying `x * 1/x == 1`. 
 
 For numeric types which are not fields, for example, 
 [[Integer]], there is still a division operation, which is
 understood to produce a [[remainder|Integral.remainder]]. 
 
 Some numeric types, for example complex numbers, do not 
 have a [[total order|Comparable]]. Numeric types with a 
 total order also satisfy [[Scalar]]."
see (`interface Scalar`)
by ("Gavin")
shared interface Numeric<Other> of Other
        satisfies Summable<Other> & 
                  Invertable<Other>
        given Other satisfies Numeric<Other> {
    
    "The difference between this number and the given 
     number."
    shared formal Other minus(Other other);
    
    "The product of this number and the given number."
    shared formal Other times(Other other);
    
    "The quotient obtained by dividing this number by the 
     given number. For integral numeric types, this 
     operation results in a 
     [[remainder|Integral.remainder]]."
    see (`interface Integral`)
    shared formal Other divided(Other other);
    
}

/*shared N plus<X,Y,N>(X x, Y y)
        given N of X|Y satisfies Numeric<N>
        given X satisfies Castable<N> & Numeric<X>
        given Y satisfies Castable<N> & Numeric<Y> {
    return x.as<N>().plus(y.as<N>());
}*/      
