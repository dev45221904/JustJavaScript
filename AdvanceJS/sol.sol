// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.35 <0.9.0;

contract HelloWorld {
//data type: boolean, int, uint, address, bytes..

    //1. bool
    bool public isOn; // default 'false'
    bool isAvailable = true;

    //2. uint
    uint256 myNum = 45;
    uint256 public myNum0;  // default 0
    uint16 myNum2 = 65535; // 16 bit till 65535

    //3. int
    int256 myNum3 = -98;

    //4. string
    string myString = "This is my string";
    string myString2 = "new String";

    //5. address
    address myAddress = 0xC008675Fc76054a28eA5B0FFbebFFC1Cb2506F83;

    //6. bytes
    bytes16 newByte = "Dev";   // Basically bytes are string are same 

//-------------FUNCTIONS-------------
  function myNum0F(uint256 _mynum0) public {
    myNum0 = _mynum0;
  }
    // view and pure only act as read only;
  function newFunc()public view returns(uint256){
    return myNum0;
  }
  function MUl(uint256 a, uint256 b) public pure returns(uint256){
   uint256 sum = a + b;
   return sum;
  }
  function strings(string memory name)public pure returns(string memory){
    return name;  
  }
  function samFunc(string memory name)public pure returns(string memory){
    return name;
  }
//-------------ARRAYS & STRUCTS--------------
    // USING STRUCT YOU CAN CREATE YOUR OWN TYPE
  struct hereos{
    uint256 id;
    string power; 
  }
  hereos public homelander = hereos(1, "laser");// 1st method to assign
  hereos public Atrain = hereos({id: 2, power: "speed"}); // 2nd method to assign


hereos[] public allhereos; // dynamic array
function HerooFunc(string memory _power, uint256 _id) public{
    allhereos.push(hereos(_id, _power));
}
//hereos[4] public allhereos; // static array... '4' here defines the fixed size of an array

struct vought{
    uint256 id;
    string name;
    string powers;
}
vought[] public supes;
function AddSupes(uint256 _id, string memory _name, string memory _powers) public{
    supes.push(vought(_id, _name, _powers)); 
}
function ShowSupes() public view returns(vought memory){
    return supes[0];
}

//--------------------MAPPINGS-------------------
struct emp{
  uint256 Eid;
  string name;
  uint256 salary;
  bool onLeave;
  bool WFH;
}
mapping(uint256 => string) public Names;
mapping(uint256 => uint256) public Salaraies;

emp[] public employees;
function addEmp( uint256 _Eid, string memory _name, uint256 _salary, bool _onLeave, bool _WFH)public{
  employees.push(emp(_Eid, _name, _salary, _onLeave , _WFH));
  Names[_Eid] = _name;
  Salaraies[_Eid] = _salary;

}
}   

