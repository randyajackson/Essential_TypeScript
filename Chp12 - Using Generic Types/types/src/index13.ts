//Creating Generic Classes
import { City, Person, Product, Employee } from "./dataTypes";

// Interfaces can be defined with generic type parameters, allowing functionality to be defined 
// without specifying individual types. Listing 12-21 defines an interface with a generic type 
// parameter.

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

// The Collection interface has a generic type parameter named T

// The type parameter is used by the add and get methods.
// It is constrained to ensure only types with a name property can be used.

// An interface with a generic type parameter describes a set of abstract operations bet doesn't 
// specify which types they can be performed on leaving specific types to be seleccted by
// derived interfaces or implementation classes.    




