"Efficiently populate an [[Array]] of the given [[size]], 
 using a [[function|element]] of the element index.
 
     populateArray(100, 1, (Integer last) => last*2);"
throws (`class AssertionError`, 
        "if `size<0` or `size>runtime.maxArraySize`")
see (`class Array`,
     `function generateArray`,
     `value runtime.maxArraySize`)
by ("Gavin")
shared native Array<Element> populateArray<Element>(
        "The [[size|Array.size]] of the resulting array."
        Integer size,
        "A function to populate an element of the array, 
         given its [[index]]."
        Element element(Integer index));