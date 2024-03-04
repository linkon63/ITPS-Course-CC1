using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

namespace Lab_3.Task4

{

internal class Animal

{

public virtual void Walk()

{

Console.WriteLine("The animal is walking.");

}
 

public virtual void Eat()

{

Console.WriteLine("The animal is eating.");

}

}

}



using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

namespace Lab_3.Task4

{

internal class Bird : Animal

{

public int NoOfWings { get; set; }

public bool Fly { get; set; }

public override void Walk()

{

Console.WriteLine("The bird is hopping around.");

}

public override void Eat()

{

Console.WriteLine("The bird is pecking at its food.");

}

}

}



using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

namespace Lab_3.Task4

{

internal class Dog: Animal

{

public int NoOfLegs { get; set; }

public string Bark { get; set; }

public override void Walk()

{
 

Console.WriteLine($"The dog is walking on {NoOfLegs}

legs.");

}

public override void Eat()

{

Console.WriteLine($"The dog is eating with enthusiasm. And Barking {Bark}");

}

}

}

using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

namespace Lab_3.Task4

{

internal class Dove : Bird

{

public string Color { get; set; }

public override void Walk()

{

Console.WriteLine("The dove is gracefully walking.");

}

public override void Eat()

{

Console.WriteLine("The dove is delicately eating.");

}

}

}
