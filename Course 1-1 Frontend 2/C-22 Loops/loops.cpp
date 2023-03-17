#include <bits/stdc++.h>
using namespace std;

int jugKoro(int x, int y)
{
    return x+y;
}

int biyogKoro(int x, int y){
    return x-y;
}

int mul(int x, int y){
    return x*y;
};

int divi(int x, int y){
    return x/y;
}

/// non return function
void printKoro(string str, int value){
    cout<<str<<value<<endl;
}

void main()
{

    /// condition -> statement

    /// control + shift + c = comment and cnrel + shift + x = uncomment
//    for(
//        // condition section
//    )
//    {
//        // statement
//
//    }


//    int n = 10;
//    int i = 1;

    // map, filter, find, while, for, do while,
//    while( i < n){ // infinity loop
//        cout<<" i "<<endl;
//        i++; // base case of programming
//        // worst case of programming
//    }


    /// parallel series -> fibonacci series
    /// 1+2+3+4+5 = 15 ............... + n;


//    int n,i = 1,cnt = 0;
//    cin>>n;
    /// a + (n-1)*d;

    //    int ans = 1 + ( (n - 1) * (2-1) ); // 1+ (4*1) = n*n+1/2

    //    int ans = (n* (n+1) ) / 2; // 1+ (4*1) = n*n+1/2
    //    cout<<"You ans : "<<ans<<endl;


    // time complexity // space complexity ( Data Structure and Algorithm )

//    while(i <= n)
//    {
//        cnt = cnt+i; /// cnt = 0 + i; OR cnt +=i; // short hand increment/decrement
//        i++;
//    }
//    cout<<"Your result : "<<cnt<<endl;



    /// function 1.return function 2. non return function

    int a,b;
    char sign;
    cin>>a>>sign>>b; /// multi-line input
    //cout<<"Out:"<<a<<sign<<b<<endl;

    if(sign == '+'){
        printKoro("Addition is : ",jugKoro(a,b));
        //cout<<"Addition is : "<<add(a,b)<<endl;    /// cout is build in functions
    } else if(sign == '-'){
        printKoro("Subtraction is : ",biyogKoro(a,b));
        //cout<<"Subtraction is : "<<sub(a,b)<<endl; /// user define functions
    }else if(sign == '*'){
        printKoro("Multiplication is : ",mul(a,b));
        //cout<<"Multiplication is : "<<mul(a,b)<<endl;
    }else if(sign == '/'){
        printKoro("Division is : ",divi(a,b));
        //cout<<"Division is : "<<divi(a,b)<<endl;
    }else{
        //cout<<"Please correct input value "<<endl;
    }

    /// system.outline.println(); ///java

//    return 0;
}



