const Expenses =[
    {
        id:1,
        name:'Car insuranse',
        date:new Date(20,07,2022),
        amount:$230
    },
    {
        id:1,
        name:'Home Expenses',
        date:new Date(20,07,2022),
        amount:$1390
    },
    {
        id:1,
        name:'Personal Expenses',
        date:new Date(20,07,2022),
        amount:$430
    },
    {
        id:1,
        name:'Smartphone Purchase',
        date:new Date(20,07,2022),
        amount:$260
    }
]

function Expenses(){
    return <ExpenseItem 
    id={Expenses[0].id}
    />
}

export default Expenses;