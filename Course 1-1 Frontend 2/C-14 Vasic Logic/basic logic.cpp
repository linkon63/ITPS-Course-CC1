
#include <iostream>

using namespace std;


int main()
{
    int a,b,result = 0;

    string plusSign = "+", minusSign = "-", mul = "*", div="/", mod = "%";
    string operatorSign;

    cout<<"What you want to do \n";
    cout<<"For addition please type + \n";
    cout<<"For subtruction please type - \n";

    cout<<"Please enter your first number:";
    cin>>a;

    cout<<"Please type your operator:";
    cin>>operatorSign;

    cout<<"Please enter your second number:";
    cin>>b;

    if(operatorSign == plusSign){
        result = a+b;
    }else if(operatorSign == minusSign){
        result = a-b;
    }else{
        cout<<"You entered wrong operator \n";
    }

    cout<<"Your Result is:"<<a<<operatorSign<<b<<"="<<result<<endl;
    cout<<"\n\nYour modulation : "<<a%b<<endl;




    // cout<<"Your Result is:"<<a<<operatorSign<<b<<"="<<result<<endl;




//    string yourName = "Linkon";
//    string password = "1234";
//
//    string typedUserName,typedPassword;
//
//    cout<<"Please enter userName:";
//    cin>>typedUserName;
//    cout<<"Please enter password:";
//    cin>>typedPassword;
//
//    if(typedUserName == yourName && typedPassword == password)
//    {
//        cout<<"You are welcome Mr. "<<yourName<<endl;
//    }
//    else
//    {
//        cout<<"Sorry you enter wrong username and password \n";
//    }

    /// username password data base accesss
    /// logical expression




//    cout<<"Please enter your first number:";
//    cin>>a;
//    cout<<"Please enter your second number:";
//    cin>>b;
//    int result = a+b;
//    cout<<"Your addition result is :"<<result<<endl;

    return 0;
}
