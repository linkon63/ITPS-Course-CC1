#include <bits/stdc++.h>
using namespace std;

int main()
{

    // arrayType arrayName[arraySize] = {value, value};

// int arr[10] = {15,46,78,1,55,16};

//    cout<<" 0 : "<<arr[0]<<endl;

//    for(int i = 0; i<10; i++)
//    {
//        cout<<" i : "<<i<<" Value : "<<arr[i]<<endl;
//    }

//
//    int empSize = 0;
//    cout<<"Your Emp Number:";
//    cin>>empSize;
//    int salaray[empSize];
//
//    int allSalary = 0;
//    for(int i=0; i<empSize; i++){
//        cout<<i+1<<" Emp Salary : ";
//        cin>>salaray[i];
//        allSalary += salaray[i];
//    }
//
//
//
////    for(int i=0; i<empSize; i++){
////       allSalary += salaray[i]; // allSalary = allSalary + arr[i];
////    }
//
//    cout<<"This month you have give total salary : "<<allSalary<<endl;



//    int arraySize = 0;
//    cout<<"Your Number";
//    cin>>empSize;
//    int salaray[empSize];

//    int arr[10] = {50,60,50000,10,60000,70000,12,90,45};
//
//    int biggestNumber = 0;
//
//    for(int i = 0; i<10; i++)
//    {
//        if(arr[i] <= biggestNumber)
//        {
//            continue;
//        }
//        else
//        {
//            biggestNumber = arr[i];
//        }
//    }
//
//    cout<<"Your Biggest Number is:"<<biggestNumber<<endl;


/// Take array size and dec: array and take input of this array
/// find the minimum value of this array using single loop;


    int arr[] = {12,11,13,5,6};
    int sizeOfArr = sizeof(arr)/sizeof(arr[0]);
    cout<<"Array Size : "<<sizeOfArr<<endl;

    int i,key,j;

    for(int i = 1; i<sizeOfArr; i++){
        key = arr[i];

        j = i - 1;

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }

    /// printing array

       for(int i = 0; i<sizeOfArr; i++){
        cout<<arr[i]<<" ";
       }

    return 0;
}
