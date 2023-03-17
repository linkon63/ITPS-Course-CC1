#include <bits/stdc++.h>

using namespace std;

int add(int x, int y)  // parameters
{
    return x + y;
}

int sub(int x, int y)  // parameters
{
    return x - y;
}

int mul(int x, int y)  // parameters
{
    return x*y;
}

void justPrint(string x, int value)
{
    cout<<x<<value<<endl;
    // system.out.printline("hello world");
}

void cal(int x, int y){
    int resultAdd = add(x,y);
    justPrint("Your Addition    Result : ", resultAdd );
    int resSub = sub(x,y);
    justPrint("AMI BIYOG KORCHI : ", resultAdd );
}

int main()
{
    int a,b,result;
    cout<<"Please type your first num :";
    cin>>a;
    cout<<"Please type your sec   num :";
    cin>>b;
    cal(a,b);

    // result = add(a,b);
    // cout<<"Addition is : " <<result<<endl;

    // result = sub(a,b);
    // cout<<"Subtraction is : "<< sub(a,b);

    // result = add(a,b);
    // tumiPrintKoro(result);


    return 0;
}
