#include <iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter your fact number: ";
    cin>>n;
    long long fact = 1;
    if(n == 0 || n == 1){
        cout<<"Fact num: 1"<<endl;
    }
    for(int i = n; i > 0; i--){
        fact *= i;
    }
    cout<<"Fact num:"<<fact<<endl;
}
