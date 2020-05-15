// create a class Node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// nodeOne = new Node(7);

// nodeTwo = new Node(10);

// nodeOne.next = nodeTwo;
// nodeTwo.next = new Node(11);



// console.log(nodeOne, "This is my Node object")

// console.log(nodeOne.value, "This is nodes value", nodeOne.next, "This is what nodeOne points to")



// create a class SLL
class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    add_back(value){
        if(this.head == null){
            this.head = new Node(value);
        }
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value)
        return this
    }
    display(){
        // remember the runner! (monkey)
        var runner = this.head;
        var count = 0
        while(runner){
            count ++;
            console.log(`This is current Node ${count}, containing value ${runner.value}, next is ${runner.next}`)
            runner = runner.next
        }
        return this
    }
    add_front(value){
        var restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    searchNode(value){
        var runner = this.head;
        while(runner) {
            if(runner.value == value){
                return true
            }
            runner = runner.next
        }
        return false
    }
    maxMinAvg(){
        var num_of_nodes = 0
        var returnObj = {
            'max': this.head.value,
            'min': this.head.value,
            'avg': 0
        }
        var runner = this.head;
        while(runner){
            num_of_nodes++;
            if(runner.value > returnObj['max']){
                returnObj['max'] = runner.value;
            }
            if(runner.value < returnObj['min']){
                returnObj['min'] = runner.value;
            }
            returnObj['avg'] += runner.value;
            runner = runner.next;
        }
        returnObj['avg'] = returnObj['avg']/num_of_nodes;
        return returnObj
    }
}


first_SLL = new SLL(7);

console.log(first_SLL, "this is my first SLL with one node")

first_SLL.add_back(10).add_back(12).add_back(14)

console.log(first_SLL, "After testing add back")
first_SLL.add_front(6).add_front(5).add_back(50).add_front(22)

console.log(first_SLL.searchNode(50))

first_SLL.display();

console.log(first_SLL.maxMinAvg())
// add to back


// add to front


// display list


// search for node


// number of nodes


// max, min, avg