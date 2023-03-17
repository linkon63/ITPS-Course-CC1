#include <iostream>
using namespace std;

int main()
{

// -------------------------------------------------------------
// 1. for loop
// (initialize) (condition) (increment/decrement)
//        for( int i = 5; i < 10; i++){
//            cout<<"I : "<<i<<endl;
//        }

//        int number;
//        cout<<"Please enter your multiplier :";
//        cin>>number;
//
//        for(int i = 1; i<=10; i++){
//            cout<<number<<" * " << i << " = "<< number*i<<endl;
//        }

    int loopCount = 1;
    for( int i = 10; i > 0;)  // (i > 0) /-OR-/ (0 < i)
    {
        int loopCount1 = (loopCount*10);
        loopCount++;
        cout<<"I : "<<i<< " = "<< loopCount1 <<endl;
    }




// -------------------------------------------------------------
    // 2. while

    // 3. do while

    // foreearch loop , map , filter,

//    cout<<"1"<<endl;
//    cout<<"2"<<endl;
//    cout<<"3"<<endl;
//    cout<<"4"<<endl;
//    cout<<"5"<<endl;

    return 0;
}
