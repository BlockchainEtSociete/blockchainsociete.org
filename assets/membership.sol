pragma solidity ^0.4.24;

contract Membership{

    mapping (address=>uint) public members;
    
    uint nbSubscriber = 0;
    
    function subscribe() public payable{
        
        require( msg.value > 0, "membership requires ether");
        
        if( members[msg.sender] == 0 ){
            emit NewSubscriber();
            nbSubscriber = nbSubscriber + 1;
        }
        
        address from = msg.sender;
        uint value = msg.value;
        
        uint donation = members[from];
        donation = donation + value;
        
        members[msg.sender] = donation;
        
    }
    
    event NewSubscriber();
    
    
}