#include <iostream>
#include <cmath>
using namespace std;

/*
 void myFunction(){
    cout<<"My function called"<<endl;
}
int rInt(){
return 10;
}
// double int void string
void welcome(string name){
    cout<<"Welcome "<< name <<" Sir"<<endl;
}
void sorry( string name){
    cout<<"Im Sorry "<<name<<" :( "<<endl;
}


int add(int x,int y)
{
    return x+y;
}

int sub (int x,int y)
{
    return x-y;
}

int mult(int x,int y)
{
    return x*y;
};

int division(int x,int y)
{
    return x/y;
}

void showOptions()
{
    cout<<"for add type   :1 -"<<endl;
    cout<<"for sub type   :2 -"<<endl;
    cout<<"for mult type  :3 -"<<endl;
    cout<<"for divi type  :4 -"<<endl;
    cout<<"for show op    :5 -"<<endl;
}


bool isPrime(int n)
{

    // cout<<"Calling 1:"<<n<<endl;
    if(n <= 1)
    {
        return false;
    }
   //  cout<<"Calling 2:"<<n<<endl;
    for( int i = 2; i < n; i++)
    {
        if(n%i == 0)
        {
            // cout<<"Calling 3:"<<n<<" : "<<n%i<<endl;
            return false;
        }
    }
    return true;
}

*/

int countDigit(int number){
    int dCount = 0;
    while( number != 0 ){
        number = number / 10;
        ++dCount;
    }
    return dCount;
}

bool isArmstrong(int number, int digit){
    int originalNumber = number;
    int sum = 0;

    while( number != 0 ){
        int lastDigit = number % 10;
        sum += pow(lastDigit, digit);
        number /= 10;
    }
    if(originalNumber == sum){
        return true;
    }
    return false;
}

int main()
{

    int num = 0;
    cout<<"Please type your number : ";
    cin>>num;
    int digit = countDigit(num);
    // cout<<"Total Digit:"<<digit<<endl;
    if(isArmstrong(num, digit)){
        cout<<"Armstrong :"<<num<<endl;
    }else{
        cout<<"Not Armstrong : "<<num<<endl;
    }
    // step 1



    /*
     for(int i = 1; i<=100; i++)
     {
         if(isPrime(i))
         {
             cout<<"Prime number is : "<<i<<' '<<endl;
         }
     }




         showOptions();
         int op;
         int a,b;
         while(true)
         {
             cout<<"Enter your option:";
             cin>>op;

             switch(op)
             {
             case 1:
                 cout<<"Enter your 1st num:";
                 cin>>a;
                 cout<<"Enter your 2nd num:";
                 cin>>b;
                 cout<<"Your result is :"<<add(a,b)<<endl;
                 break;
             case 2:
                 cout<<"Enter your 1st num:";
                 cin>>a;
                 cout<<"Enter your 2nd num:";
                 cin>>b;
                 cout<<"Your result is :"<<sub(a,b)<<endl;
                 break;
             case 3:
                 cout<<"Enter your 1st num:";
                 cin>>a;
                 cout<<"Enter your 2nd num:";
                 cin>>b;
                 cout<<"Your result is :"<<mult(a,b)<<endl;
                 break;
             case 4:
                 cout<<"Enter your 1st num:";
                 cin>>a;
                 cout<<"Enter your 2nd num:";
                 cin>>b;
                 cout<<"Your result is :"<<division(a,b)<<endl;
                 break;
             case 5:
                 showOptions();
                 break;
             default:
                 cout<<"Please enter valid options from top"<<endl;
             }

         }


         /*
             for(int  i=0; i<1000; i++){
                 sorry("Rakul preet ");
             }

                cout<<"Hello"<<endl;
                 myFunction();
                 myFunction();
                 cout<<"int num:"<<rInt()<<endl;
                 welcome("Jenny");
             return 0;
         */
    /*  string name;
      string department = "Computer Technology";
      float a,b,c;
      float cgpa;
      char group = 'A';

      cout<<"Enter your Name               :";
      cin>>name;
      cout<<"Enter your 1st semester result:";
      cin>>a;
      cout<<"Enter your 2nd semester result:";
      cin>>b;
      cout<<"Enter your 3rd semester result:";
      cin>>c;

      cgpa = a+b+c/3;

      cout<<"Name : "<<name<<"\n Group:"<<group<<"\n Department:"<<department<<"\n CGPA:"<<cgpa<<endl;

      */

    // C++ Operators
    // a + b;  a,b = operant , + operator

    // Arithmetic Operators +,-,*,/
    // Assignment Operators = ,
    /*
        a = 5; = 5
        +=, -=, *=,

        a = a+5; = 10
            short hand command
            a += 5;  ||  a = a+5; ( || -> OR)
            a -= 5;

            */
    // Relational Operators
    /*
        a = 5; b = 10;

        a == b;
        a == b;

        Operator	Meaning	Example
        ==	Is Equal To	3 == 5 gives us false
        !=	Not Equal To	3 != 5 gives us true
        >	Greater Than	3 > 5 gives us false
        <	Less Than	3 < 5 gives us true
        >=	Greater Than or Equal To	3 >= 5 give us false
        <=	Less Than or Equal To	3 <= 5 gives us true

    */
    // Logical Operators
    /*
     AND OR NOT

     a = 4; b = 5;

     if(a == 4 && a < b && )

    */
    // ---------------------
    // Bitwise Operators ->
    /*
        = positional
                = Decimal(0-9) octal(0-7) hexa-d(0-9-A-F) binary(0,1)
        = non positional

        12 = 00001100 (In Binary)
    25 = 00011001 (In Binary)

    Bitwise OR Operation of 12 and 25
    00001100
    |   00011001
    _________
    00011101  = 29 (In decimal)

    */
    // Other Operators / modular opator


    /*
        int a,b,c;
        cin>>a>>b>>c;
        // cout<<"A:"<<a<<" - B:"<<b<<"- C:"<<c<<endl;

        // find out the biggest number among three

        a > b then check a > c = a
        b > c = b
        = c



        if(a > b && a > c)
        {
            cout<<"A is Bigger"<<endl;
        }
        else if( b > c && b > a)
        {
            cout<<"B is Bigger"<<endl;
        }
        else
        {
            cout<<"C is Bigger"<<endl;
        }

        // looping in cpp
        /*
        for loop
        while loop

        do...while loop

    int i = 0;
    for(i; i <= 10; i++ )
    {
        cout<<"Num i:"<<i<<endl;
    }
    cout<<"Value of i:"<<i<<endl;
    cout<<"\n---------------------"<<endl;
    int j = 0;
    while( j <= 10)
    {
        cout<<"Num j:"<<j<<endl;
        j++;
    }
    cout<<"Value of J:"<<j<<endl;

    int k = 0;
    do
    {
        cout<<"Num:"<<k<<endl;
        k++;
    }
    while(k <= 10);


    * * * * * * *
    * * * * * *
    * * * * *
    * * * *
    * * *
    * *
    *

    ----------------------
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
    */
    /* for(int i = 1; i<= 7; i++)
    {
        for(int j = i; j <= 7; j++){
            cout<<"* ";
        }
        cout<<endl;
        //cout<<"* * * * * * *"<<endl;
    }

    */


    /*
        Array - combination of simmiler  data

    */

    /*
        int a[4][2] =
        {
            {1234, 56},
            {1212, 33},
            {1434, 80},
            {1312, 78}
        } ;
        cout<<"1st element 3 : "<<a[3][0]<<endl;

         for(int i = 0; i< 5; i++){
            cout<<a[i]<<endl;
        }
        */


    //int amount[] = {507,263,693,86,364,2695,45,63}; // static array

    //int aLength = sizeof(amount)/sizeof(amount[0]);

    // cout<<"sizeof(amount)"<<sizeof(amount)<<endl; // total bits in array / single bits per element
    // cout<<"sizeof(amount[0])"<<sizeof(amount[1])<<endl;
    // cout<<"length:"<<length;

    /*  int aSize;
      cout<<"Array Size:";
      cin>>aSize;
      int amount[aSize] = {};

      for(int i = 0; i<aSize; i++){
       cin>>amount[i];
      }


    int hValue = amount[0];
    int lValue = amount[0];
    int aTotal = 0;

    for(int i=0; i<aSize; i++){
       aTotal += amount[i]; // aTotal = aTotal+amount[i];
       if(hValue < amount[i]){
           hValue = amount[i];
       }
        if(lValue > amount[i]){
           lValue = amount[i];
       }
    }
    cout<<"Highest value in this array is :"<<hValue<<endl;
    cout<<"Lowest value in this array is :"<<lValue<<endl;
    cout<<"Amount Total:"<<aTotal<<endl;
    return 0;
    */

    /*
    int matrix[3][3] = {
    {
        5,6,7
    },
    {
        1,2,3
    },
    {
        7,8,9
    }
    };
    int mTotal = 0;
    int lmt = 0;
        for(int i=0; i<3; i++){
        for(int j = 0; j<3; j++){
            mTotal += matrix[i][j];
            if(i == j){
                lmt += matrix[i][j];
            }
            // cout<<"i:"<<i<<"| j:"<<j<<" - V:"<<matrix[i][j]<<endl;
        }
    }
    cout<<"Matrix total:"<<mTotal<<endl;
    cout<<"Left Matrix Total : "<<lmt<<endl;
    */

    // function cpp



}

