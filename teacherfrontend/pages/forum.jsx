import React from "react";
import Body from "../components/Body";
import Foruminside from "../components/utils/forum/foruminside";
import Forumoutside from "../components/utils/forum/forumoutside";
import { useState } from "react";
import Outsidedoubts from "../components/utils/forum/outsidedoubts";


export default function Forum({ children }) {
  
  const [show, setShow] = useState(null);

  const doubtsData = [
    {
      id: 1,
      subject:"Mathematics",
      name: "Raihan Khan",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.byjus.com%2Fwp-content%2Fuploads%2F2020%2F11%2FPreparation-method-of-bromine-water-5.png&imgrefurl=https%3A%2F%2Fbyjus.com%2Fjee%2Fbromine-water-test%2F&tbnid=ui5NmRugq5xGiM&vet=12ahUKEwju1cP66sj8AhXJKbcAHUegBXYQMygCegUIARDDAQ..i&docid=vydo5NyPW3xRMM&w=750&h=319&q=explain%20bromine%20structure&ved=2ahUKEwju1cP66sj8AhXJKbcAHUegBXYQMygCegUIARDDAQ",
      doubt: "What is the difference between a function and a method?",
      date: "21:21",
      answers: [
      {
        aid: 1,
        verified: false,
        name: "Aritra Roy",
        img: "data:image/png;base64,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",
        answer: "Bromine structure is like this one",
        date: "21:45"
      },
      {
        aid: 2,
        verified: false,
        name: "Sayak Sarkar",
        img: "data:image/png;base64,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",
        answer: "Gallium is not bromine and structure is not like this one",
        date: "22:45"
      }
    ]
    },
    {
      id: 2,
      subject:"AIML",
      name: "Risavdeb Patra",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.byjus.com%2Fwp-content%2Fuploads%2F2020%2F11%2FPreparation-method-of-bromine-water-5.png&imgrefurl=https%3A%2F%2Fbyjus.com%2Fjee%2Fbromine-water-test%2F&tbnid=ui5NmRugq5xGiM&vet=12ahUKEwju1cP66sj8AhXJKbcAHUegBXYQMygCegUIARDDAQ..i&docid=vydo5NyPW3xRMM&w=750&h=319&q=explain%20bromine%20structure&ved=2ahUKEwju1cP66sj8AhXJKbcAHUegBXYQMygCegUIARDDAQ",
      doubt: "What a wonderfulll worllld!",
      date: "11:21",
      answers: [
      {
        aid: 1,
        verified: false,
        name: "Aritra Roy",
        img: "data:image/png;base64,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",
        answer: "Bromine structure is like this one",
        date: "21:45"
      },
      {
        aid: 2,
        verified: false,
        name: "Sayak Sarkar",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACeCAMAAACcjZZYAAABEVBMVEX///+xAAAAAJQAAI4AAJfi4u/Exd8AAJO4AAAAjwDy3t4AkQAAjQDgrKzZmJjpxcX79vbWjo7FT08AhwDo6PL19vv78fF4e8QQF5vZ6dg5PqxPUrHS0+osMaZjZ7pESbG9KyvLaWlscMC92bvANTVtb7d8fb3y09P67Ozqv7+eoNAADJlTVq16t3bA27+z1rC5utu8GRn02NjouLiWmNGMwImax5e1ttgmKp+kpdLOYmLaiIjYfX3FRUXKWFhqbLXp8ulBpjKdz5YZHpy+FRXagYHDPDyWmNCHicRSqknh7uB3uHJAoDnV7NKoz6WDw3lBRrFnsGGUzIx6v3AqmSC0269Np0VjtFoumiVpsGQuoRqvMH5wAAAQuUlEQVR4nO2dCV/aThPHl7DAQsIlh1wiKnJFakBbbo0FhaLSam21vv8X8syGAAkEIpfA88/v00rIufnu7OwkmQ0IGTJkyJChvvxRs82GLQGYapoFmCGYI5ZNF2pnlMOYYRjMpALIH7FZYY5gixr4PigLxthqjcWZUMnAN7+OmT6rfebQb+CbWwe4JH0GMAZ8TMVisVQYA99H1eT7+PwhG+DjJT/I7wy+UqlUob0d8pcq0PehWP/b56nJ9w84wGeDXnhX8MU6tLabHShtrGn2w5y2+SzwqUWIMLL1MTxtvAIKIGFHGq8lgvlyuczjuB/FDmwSPib+ufg6TJOan/8AnwV2rOtoM+UOfFyWbbmN4fPzDK5UKr8w3rnApclUpM8cUx7gy302PlTCNG7GTGfnwmYGx6TPGGYAH74+PT2N4s/Gh1DqIBKJ0Al/tEnxWZvxncBn42V8vA3whfpBw+fj21Vh3K/lGMbU+k5TqdQmrG9XVWba0mdnk75vd9VmeNrz7vPM5nreHZblEGOe5zGObi7uUyid3tSRF1Ssw9OrjvYGrzoUatxt6sgLS4CLXhosIL9Qkq55+982or29jR36/0EGvqW0s/gcF5suAdXO4nOZNl0CKgPfUjLwLSUD31Iy8C0lA99S2ig+i6xFtjXwoV82uHxlbM3YAtsa+FCUx4zNJt09mVtz4WunJFXmP4yONouPafsDgVK5WZp/27nwRfrPdvjL+Y8zWxvGR+3BH2kK6Nh8GjXH59h2LnyHOHp9fRrlfy3iJmZps/jwdaVUOqXPKvYxk6rMc+NpPnxSXkCsDPUkVGLWuQ40U5v2fbRN0WeP+3jO9MwF8AmhSAzFbYe8OTXXoWZow/iaZZpxcWhF+8z1fP3HfPj48sHBQZPPIRTHTGx1N6e3wPehM6YD+DrzndSc+CQzbwK4OBNfoJ+fpm3Ad82k1o0Pn1YqlVwIC4BvzgPNUrBxF1zZzuZWFEdPQWXcnh/frcnx8ZUP+/UUZ9roWH5QvAJ5nK1CoeX0rGp/8+oQ91PUzyxo35aaB5+70EqQ2odr/pDJBQIBCP86q8MXTCfJUTp9RJLuDVmgfDGwD5OV0zlCZyhzNeuoQc1nPrbBoZQCauNDgmSBq1C6Tq6yYHie7BWp79LTXketlZC4uetA8UObHEgX1wy2BtCZeSW+r14gTtnogk5SqK9gl6tQUNeTuO5ITXZ7HneBVHVcoLRYcWvHYlm+4w2C06spDD9TKxDXBvuQkRqtmfbkySbUwFxJcjujBWduSXFFJRuVwX0HTk89D9zJnXtjfYiiHFVyNP2Ei1VyNfaAMuNtFaa6wGyyVVtd2fpK3/adnlrUBd5ugQsMOgsJp3ZDcHhlp6fWVBeY8ZIr92pLhzy1kdNTi7rA2hYYYLBq2tMyQGeC1DXNzJMtkKNJF+humD4e2nxMHkB0OxWR5xbQbgFA952pPlYMjzsxq5dwJcitGpWnThordnueiz2dGAWimb2LzQPMuEhSVY/gmsednlrjDTu9R7wrNr3irT4bfcKfI3dV0btlvIXp3cNAUiwtT4OHSq7Y60lOTwmv6KofUdWcqvW2xAVSN+PqFwNaZl1pSRnnrVTwW7UPp0HNkQS52JjiJRdWUO30PNBKTSSRpCoQU0NVt9N7l89VlSTcUmis7BeKrmHBE8RUcKn8IXWBmWCNNFZreh63+sIM4JGq66LooHK7bhMkmVXyoi5wC6JAiKW89NJyNAdcHNnzOtNSwdNO7x2YqLLm6QXdUWvVHa6DNJSRnhdag1txVE/ROdb1e7J7ZI4bQutSxmlKKhvGRcN0daEsV5HOUZla8cjkXXUxHCZFDQbrJDERNgehpah6jOw899PWJxULF5mMqzwu0lI576DJiVYsh2lUQ0DvSMu4wQCVcZJ7+/C5TA2tMqXvVMA868VXI0faK2WJsnTbh++C7GkXqXhHFO13vficpDqtT3eaqiOz3Dp86VZyWjzqbiVHDWet+NKtGZcyNUVdbxu+zBWZHo1cmEb+aJ34oIeYERLB0mEFbxs+r8k1Y7UaGTJbJ74LcjtrPXfiaji5Xfgchb1ZcWimkRiY3xrxBY/I7IuZ+tD8tgyfl8x+quEcmt8a8RWJzjMN99A6twwfuZpd745GQp5aIz6nSe9mSvJKbgTbha840/NR1QZXSWvEd5XUY1JPyF5yu/B5Zz9BQorWu0Z8Bc3rDaUuiHxXUgff9fU1fRVMh77K4vS6s4IyakvGV9Wt93RBfij0EXzD0tO/llQqhnL9E9HOXBvg020CKDM4uAJfYOK5sqXJH4T4yiDNAuN93RLra/IwaIjv7kpjmVoJ+WJqHF9gYr+j0ttyiGZNlmmCXP9Eolq7HuLTr5hJfIL5dLwAKVsKVWimVxRHU6lUnOYdLq3Yvkbi3QBfVXfz5BR8l+bc2JpS6elbnKKMhO/gAPDhQ3oizZDW68Q+js8zic86mb1jLcVQDEctcoqZJRIqISEXE3LLvMtMaEYuJ2pheXxt23hCvaL0I3wMdUD+M9xG1pxgzam2Wcr6YjZN13bJpAYZekLzIIaObRFsvtbd/3QJTT4UHbeU5fHlJvBRXTL7aFj5Q3yxCG+FReWmOaJceYCP6N5JLI7hE2yYD/EYjye9++O2iJ+m18IyUI5mJ+PlWrC1GQrx/FlJZeoyvsaeXp8X1PR9OUYqPjNWK6rS87zUePsnAiZxyeOxbK9Rz6v3BMU51vMKZgbD8W1nY+v5c3HcCQyTuwU/1J866zVmnVOXgC8Uws2UMu992PPqPbPV7nlzNig+xraxpDR16Qf46Fu9Kn50iaNjdjBH3FdQx33+knCJz0oaL6sIhEJW6DpOS4JQKeMK4FO7yJB5Ttn4kCR8qCj9IO7TuWabFvdZSsIp3i+VJtpFoDksfa4s4YvDZOmQaQO+8eznAT6Xbr5Rck+2T1XXoblqFLp9OTt5XyO52zKn/BXJ+qApdRSll/Gldb12bXBqH/N9itIrug7UBi/VxtdjXeUAn2PaneaBLjSuea3m8Z43EKWtoYwFaViV3x84xBI+FLBYFs89FCR8kZTKUobXvFPuNA9UvEvIUxM973jgoiy9oudNWeBErmfi+8Adl8HtwBE+S2cibzZniwop5swiDeoD8bwgWV/qML74C5GEMh9qHgvq7Qf4arp3XAZXBOP4rJ1xxzMqvTLuk04Egxe6nIoPjjLzfl860RhMzrxoC5TAV9H3JUb6Wa82CHiPwUgFvyWycOgH1hetjKd+DvAVycwRFJnG0C70L9qGpf9lpl1KLATRyrFZOhEz1F7HPG4Co7vNs255g3GOnonoXPPSJtv/kCRNSm9EKi8cvQi/UpPjsgb4PDUy+27zcOlHrnmHpad/A/RDcSIB/3gdKp51EM2HfX15TaNczMXuuPjP5hkVqVZMC/zwZr1jj0y/2ZY1jZ5/rfdJm0v7KS/VhfKe5GL4Tlf9MrPRwyv39IpPJxSP+Nf8nLc+7UmlU5VnsBC+dmSF48UkKZ79OU0NbfvLJpX9yprxBW9JQ4ufixSWzTKIhUK/Dlb7BnRVlgFpafHLEqLMnFwzPqkYE6kijgZpqBr1dt1t7iurMRArWDepH5+vAx85UvJz3pEjdUKaqzA2PMJ9tA0ZVjRcVubDuq/IlVOVYeVsmNRjLIre1ePzOBOtmuKwRSm/Tz5s5qKeMKlzrhy1VmEbcsRperxqCErGS8ieV049DGa9DdJSDefxuO7WMr4nWCMFZeDkqLZIKyGpQEjjQnVIsMVVZxguLI9T3TAy3sKg4IkWSaiSI9H4mKMVynFEWqqhk9naUV/qIgTdLa1REpuTp5YgquRht3dQcLXTS1+R6qqHwSh2T7PVdUcggtOrbkFerkp0HJTucIlijdytNyM7Aw1hdsp55nbGCLHNiY7Cq858wu9xJYl37W0m6B2m+2uWobDywSQrksc5NjpBLer0PqXWi3T0uCZAjzs5azTjpgV9xrTR4+mq6YPjolegbFVz3FD6w2OzNyV3XWsoKER6JPmZw1CCF6Qw3hA89e0YCjNTnnRisn24Ep/g9NQKjo0ep6/U2JpIb6ac6qGTnmxyI1EWRIF3g4bgyd5ts9NTK+NNjFygxujyz9LQBaa1XcrWipZXYuaofa7TU4u6wNsgbccXO9Fuh5JDBHB6tc2GqIBuK0afzi1wgaSlmzKxdhW93l1xemplhukQhhaRs7XpEuy0tuPFwzsrA99SMvAtJQPfUjLwLSUD31Iy8C0lA99SMvAtJQPfUjLwLSUD31Iy8C2lC/0hqoYMGdoeBWRtuhw7qriZvrp/sV92M4SO+79QgSOG/S2iYyYVi1kqB6HV/2Ldf0H9HysJnPEV1MH7KUbzxReGpumYObVaYx3+0A/4mLPU+KsPDM2U7PsYAQG+xUcf/lcF+GjPi+MxwHe20C/T/pcl+744kwJ8E2/nMaQj+XeuOvgaXTIGvnl1jM/a7XbuFwbrM/DNrWP5l92w1cC3gDrRM6pDmMxFV/hriYYMGTJkyJAhQ4ZWpe6rz8d9V8364csrvn31+dg/8vQf+2Cuz3eCfOzjAgdkfed6q9hh5zuiV/tT74VVntE5y34dffvmy/c4e59T+N03mN3rdRH3El7ggO92XTas/ipbokeWPUHPnIJX90GFj33vonBYlKaf3tn8+Zf77/n7x3w+jLib53y+B1vAHPp5n8/TDfP5P1/zefFRmgfWm8/fw0cvDyt9FSm+3rf8PQV/ks8/w4zH+zz8kw4p72F38CER/v/mFK31t/2HAt8j9/r68to3PpFjgWwP/tpFlvuC6FeW/YnCdKKHADtrvxfl2W/0zzPQo58PXXRvp4t/hNE7+wITDyL6Lq0nUmt/YaUqG+xhh/CBxBd2VNwvvuefdgU+O/t6z910pS/dGw5as/0BUQOh+J6RyPrEsN0OxvTPDkb2wPUQJQqb/YQ1WXTOvYjoq/0J3bOvorT4nX2CrTgx7HsBm2RvKL4TWCWPnugebugedglf98H+PPrCvqJnJT6OBYPhTsDZ9c7DfXxPSMb3/ojEn9yfLvcOc55oB/OHu0eUBhiqiE7s7+gb9xN28vK3m2e/9xdT3yfecOIf+4/e+dd3IMwCx+9sfrCHnzuFT3zgfo++/WQf8g/wX5S/P3I3YWjc35DPbn/rWx8F0sd3A436K/fc5W5gN6/UhL9wr2p8zxxUTffl5lHCRxcP8D2zrA86fW6IT/xB93BC97BD+KjbGun+7e0NPNFfcTCDg+jkN21Qb28/ui9qfOwXoMZ9CVN86B/lQzshFb5zoAGAXsU8mJe0eGh9HLRmJIoj6xvtYXfwvbIv5+HHLnr3DSlKjZeTY68nLv/IvfR9HzTeR1GJ78eXc2i4fXw9+9+TsP0trMb3+Maeh58A/z371gvTRQN84huA/+r7N8LX42APHN3DzuA7ZzkO2tBv9MIN8f30AT47dK2S/vl8L4OzyXO+/Dcfbet2KWy+4Xx/T1DYR30fnD0E2NCH+LhzJPo4MCsfC8hpE6VRDXvD+tieKIXN4rtPROEfsARM8pxjqdHdj/bA7kzYLIYlQWz33hvNE8FNvZ8M1+gq1hZF6SsNBcPdbj8iDPfD53B4uEiaJUrzYR36cc8+d6WJ4WLp2EheTZR3NNrDbkm8UV+Bhf92p6y5mO7Z7/or7a7yY+3l9yLXszP0j/u/xrdufTlf5ALZkCFDhgwZWpX+B85uEji7FZtlAAAAAElFTkSuQmCC",
        answer: "Gallium is not bromine and structure is not like this one",
        date: "22:45"
      },
      {
        aid: 3,
        verified: false,
        name: "Sayak Sarkar",
        img: "data:image/png;base64,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",
        answer: "Gallium is not bromine and structure is not like this one",
        date: "22:45"
      }
    ]
    }
  ];

  return (
    <>
      {/* body wrapper */}
      <Body title="Forum ">
          <div className="grid grid-flow-col grid-cols-3 overflow-clip h-[88vh] rounded-2xl">
            <div className="col-span-1 bg-white overflow-auto scrollbar-hide">
              <Forumoutside>
                {doubtsData.map((e) => (
              <div key={e.id} onClick={()=> {show===null? setShow(e):setShow(null)}} className="text-left">
                {
                <>
                <Outsidedoubts type="button" subject={e.subject} doubt={e.doubt}
                  date={e.date} name={e.name}
                  onClick={()=> {show===null? setShow(e):setShow(null)}} />
                </>
                }
              </div>
                ))}
                </Forumoutside>
            </div>

            <div className="col-span-2 bg-pale overflow-auto scrollbar-hide">
              
            <form>
                <textarea className=" bottom-[1.2rem] w-[49.18rem] h-[2.7rem] p-2 fixed font-[Montserrat] resize-none" placeholder="Type Something..."></textarea>
                <button className="bg-primary h-9 w-[6vw] rounded-xl text-white fixed bottom-[1.4rem] right-[2vw]  font-[Montserrat]">Send</button>
                <div className="fixed bottom-[1.4rem] right-[9.5vw]">
                <label for="files">
              <svg
                className="w-[2.5vw] h-[2.5vw] cursor-pointer"
                viewBox="0 0 50 50"
                fill="#E9EAFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="2"
                  width="20"
                  height="22"
                  rx="17"
                  fill="#E9EAFF"
                />
                <circle cx="25" cy="25" r="25" fill="pale" />
                <path
                  d="M22.2182 34.7611C26.3394 30.7479 29.5631 27.5399 33.149 24.0961C34.3328 22.8854 35.0826 21.7004 35.3983 20.5411C35.9508 18.3535 35.1013 16.4592 33.6225 14.9768C32.2019 13.5857 30.6826 12.9288 29.0647 13.0061C27.4468 13.0834 25.8486 13.882 24.2702 15.4019L14.2075 25.294L15.8649 26.8783L25.9275 17.0248C26.9601 16.0635 28.1888 15.1572 29.5974 15.2859C31.7437 15.581 33.6391 18.1532 33.149 19.9615C32.5276 21.5659 31.671 22.2976 30.4854 23.4585C26.8787 26.9812 24.0666 29.7053 20.5608 33.1382C19.2433 34.3171 18.3912 34.6363 17.1672 33.5246C16.5358 32.9063 16.2595 32.3009 16.3385 31.7084C16.426 31.0171 16.8257 30.539 17.2855 30.0855L26.48 21.0821C26.9 20.67 27.8566 19.8792 28.2558 20.232C28.562 20.9276 27.7734 21.5916 27.3876 21.9708L18.9429 30.2401L20.5608 31.863L29.045 23.5938C30.5063 22.1179 31.5562 20.3144 29.9131 18.6477C28.096 17.1205 26.1816 18.1401 24.8226 19.4592L15.6281 28.4626C14.6811 29.39 14.1417 30.3947 14.0102 31.4766C13.9065 32.9934 14.6048 34.211 15.5492 35.1476C16.4369 36.012 17.3958 36.4909 18.5878 36.5C20.0208 36.4438 21.4299 35.5195 22.2182 34.7611Z"
                  fill="#9999EE"
                />
              </svg>
            </label>

            <input
              id="files"
              className="hidden"
              
              type="file"
            ></input>
            </div>
            </form>
            {console.log("Show:",show)}
              {show!==null? <Foruminside doubtData={show}/>: null}
              <div>
            
        </div>
            </div>
            </div>
            
      </Body>
    </>
  );
}
