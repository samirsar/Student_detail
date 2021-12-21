function page()
{
    console.log("you are clicking on list");
            if(count!=0)
            {
                // $('.student_list1').html('');
                $('.card').hide('slow');
                count=0;
            }
            else{
            let txt=  localStorage.getItem('list');
            
            let obj=JSON.parse(txt);
            let str="";
            if(obj!=null){
                let i=0;
                for(element of obj)
                {
                    str+=`<div class="card mt-3" style="width: 18rem;" id="${i}">
                    <div class="card-body" >
                    <div style="color:white;"><i class="fas fa-user-graduate fa-2x"></i></div>
                    <h5 class="card-title" style="color:white ;">${element.roll_no}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${element.name}</h6>
                    <ul>
                        <li  style="color:white;">${element.email_id}</li>
                        <li style="color:white;">${element.subject}</li>
                        
                        </ul>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="btn1 d-flex justify-content-around">
                    <button type="button" class="btn btn-warning">Read more</button>
                    <button type="button " class="btn btn-danger" " onclick="delete_detail(${i})">Remove</button>
                    </div>
                    
                    </div>
                    </div>`;
                    i++;
                }
            }
            else
            {
                console.log("hoi");
                str=`<h1 style="color:white;">we are sorry</h1>`;
                
            }
            $('.student_list1').html(str);
            count=1;
        }
            
}
function delete_detail(index)
{
    console.log("hiii you are deleting student data",index);
    let x=confirm("Are you sure you want to remove this student");
    if(x)
    {
        let obj=localStorage.getItem('list');

        if(obj==null)
        nodeobj=[];
        else
        nodeobj=JSON.parse(obj);


        nodeobj.splice(index,1);

        localStorage.setItem('list',JSON.stringify(nodeobj));
          
        count=0;
        page();
    }
}
var count=0;
$(document).ready(function(){
    console.log("hii");
    $('#student_id').on({
        click:function()
        {
            
            page();
        }
    });

    $('#submit_id').on(
        {
            click:function(){
                console.log("you are submitting detail");

                let name=$('#fullname').val();
                let email_id=$('#email_id').val();
                let subject=$('#subject').val();

                let roll_no=$('#Roll_no').val();

                let address=$('#Address').val();
                

                let obj={
                    name:name,
                    email_id:email_id,
                    subject:subject,
                    roll_no:roll_no,
                    address:address
                }
                let x=localStorage.getItem('list');
                
                if(x==null)
                 nodeobj=[];
                else
                nodeobj=JSON.parse(x);

                nodeobj.push(obj);

                console.log(nodeobj);
               count=0;
                localStorage.setItem('list',JSON.stringify(nodeobj));
                
            }
        }
    );

});

