"A fixed-sized array of mutable elements. An _empty_ array 
 is an array of [[size]] `0`. Any element of an array may be
 set to a new value.
 
     value array = Array { \"hello\", \"world\" };
     array.set(0, \"goodbye\");
 
 This class is provided primarily to support interoperation 
 with Java, and for some performance-critical low-level 
 programming tasks."
shared final native class Array<Element>({Element*} elements) 
        extends Object()
        satisfies List<Element> &
                  Ranged<Integer, Element, Array<Element>> {
	
	//"Get the element at the specified index, or `null` if
	// the index falls outside the bounds of this array."
	//shared actual native Element? get(Integer index);
	
	"Get the element at the specified index, where the array
	 is indexed from the _end_ of the array, or `null` if
	 the index falls outside the bounds of this array."
	shared actual native Element? getFromLast(Integer index);
	
	"Get the element at the specified index, or `null` if
	 the index falls outside the bounds of this array."
	shared actual native Element? getFromFirst(Integer index);
	
    "Replace the existing element at the specified index 
     with the given element."
    throws (`class AssertionError`, 
            "if the given index is out of bounds, that is, 
             if `index<0` or if `index>lastIndex`")
    shared native void set(
            "The index of the element to replace."
            Integer index, 
            "The new element."
            Element element);
    
    "Efficiently copy the elements in the segment
     `sourcePosition:length` of this array to the segment 
     `destinationPosition:length` of the given 
     [[array|destination]]."
    shared native void copyTo(
        "The array into which to copy the elements." 
        Array<Element> destination,
        "The index of the first element in this array to 
         copy."  
        Integer sourcePosition = 0, 
        "The index in the given array into which to 
         copy the first element."
        Integer destinationPosition = 0, 
        "The number of elements to copy."
        Integer length = size-sourcePosition);
    
    shared actual native Integer? lastIndex;
    
    shared actual native Element? first;
    shared actual native Element? last;
    
    "A new array with the same elements as this array."
    shared actual native Array<Element> clone();
    
    shared actual native Boolean empty;
    shared actual native Integer size;
    shared actual native Boolean defines(Integer index);
    shared actual native Iterator<Element> iterator();
    shared actual native Boolean contains(Object element);
    shared actual native Element[] sequence();
    
    shared actual native Integer count(Boolean selecting(Element element));
    
    shared actual native Array<Element> span(Integer from, Integer to);
    shared actual native Array<Element> spanFrom(Integer from);
    shared actual native Array<Element> spanTo(Integer to);
    shared actual native Array<Element> measure(Integer from, Integer length);
        
    shared actual native {Element*} skip(Integer skipping);
    shared actual native {Element*} take(Integer taking);
    shared actual native {Element*} by(Integer step);

    "Reverses the order of the current elements in this 
     array. This operation modifies the array."
    shared native void reverseInPlace();
    
    "Sorts the elements in this array according to the 
     order induced by the given 
     [[comparison function|comparing]]. This operation 
     modifies the array."
    shared native void sortInPlace(
        "A comparison function that compares pairs of
         elements of the array."
        Comparison comparing(Element x, Element y));
    
    shared actual native Element[] sort(
        Comparison comparing(Element x, Element y));
    
}
