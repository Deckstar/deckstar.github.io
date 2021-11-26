/**
 * Gets the type of an array element.
 * Example: ArrayElement<Item[]> gives the type Item;
 */
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
