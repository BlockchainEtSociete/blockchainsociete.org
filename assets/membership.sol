pragma solidity ^0.4.24;

contract Membership{
    

    mapping (address=>uint) public members;
    
    
    function subscribe() public payable{
        address from = msg.sender;
        uint value = msg.value;
        
        uint donation = members[from];
        donation = donation + value;
        
        members[msg.sender] = donation;
    }
    
    
}