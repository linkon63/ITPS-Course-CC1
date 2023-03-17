
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int a,b,c;

    cout<<"Type your A num:";
    cin>>a;
    cout<<"Type your B num:";
    cin>>b;
    cout<<"Type your C num:";
    cin>>c;

    if(a>b && a>c )
    {
        cout<<"A is bigger"<<endl;
    }
    else if(b>c)
    {
        cout<<"B is bigger"<<endl;
    }
    else
    {
        cout<<"C is bigger"<<endl;
    }

//    if(a > b)
//    {
//        // conner case
//        if(a > c)
//        {
//            cout<<"A is bigger"<<endl;
//        }
//        else
//        {
//            cout<<"C is bigger"<<endl;
//        }
//    }
//    else if( b > c)
//    {
//        cout<<"B is bigger"<<endl;
//    }
//    else
//    {
//        cout<<"C is bigger"<<endl;
//    }

    return 0;
}
