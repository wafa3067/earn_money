import React from "react";
import "bulma/css/bulma.css";
import { Button } from "@mui/material";
import logoP from '/images/work/Avatar.png';
import HorizontalAds from "../google_ads/horizontal_ads";
const MainScreen:React.FC = () =>{
 const task1="Complete Task 1 ";
 const task2="Complete Task 2 ";
 const task3="Complete Task 3 ";
 const task4="Complete Task 4 ";
 const task5="Complete Task 5 ";
 const task6="Complete Task 6 ";
 const task7="Complete Task 7 ";
 const task8="Complete Task 8 ";
 const task9="Complete Task 9 ";
 const task10="Complete Task 10 ";
  return (
    <div>
    
<nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-slate-300 ">
  <div className="flex items-center flex-no-shrink text-black mr-6">
    <span className="font-semibold text-xl tracking-tight">Earn Money</span>
  </div>
  
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Contact
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
        About
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">login</a>
    </div>
  </div>
</nav>

    <div style={{margin:'15px',backgroundColor:"white"}}>
      <div className="grid m-4">
       {/* page1 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",
                // fontFamily: "sans-serif",
              }}
            >
              {task1}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <a href="/all_page/survay/">
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              Complete
            </Button>
            </a>
          </div>
        </div>
            {/* page2 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task2}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay2">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page3 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task3}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay3">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
          {/* page4 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task4}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay4">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page5 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task5}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay5">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page6 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task6}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay6">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page7 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task7}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay7">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page8 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task8}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay8">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page9 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task9}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay9">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
            {/* page10 */}
        <div
         className="cell m-5"
          style={{
            padding: "10px",
            backgroundColor: "pink",
         
            borderRadius: "8px",
            boxShadow: "4px 3px 10px lightblue ",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize: "22px",
                marginBottom: "10px",

                // fontFamily: "sans-serif",
              }}
            >
              {task10}
            </p>
          </div>
          <div>
            <img src="/images/new/png-transparent-action-item-computer-icons-task-others-miscellaneous-angle-text-removebg-preview.png" />
          </div>
          <a href="/all_page/survay10">
          <div
            style={{
              paddingTop: "20px",
              justifyContent: "center",
              justifyItems: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                backgroundColor: "wheat",
                color: "black",
                width: "auto",
              }}
            >
              Complete
            </Button>
          </div>
            </a>
        </div>
    
      </div>
      
    </div>
    </div>
  );
}

export default MainScreen;
