import React from 'react'
import Body from '../components/Body'

export default function Certificates({children}) {
  return (
    <>
      {/* body wrapper */}
      <Body title="Certificate Generation">
        <form className='font-[Montserrat]'>
          <div className='bg-pale flex flex-row items-center justify-between m-10 mb-5 mt-10 rounded-full'>
            <h3 className='m-4 mx-10 text-lg font-medium text-accent'>Upload CSV File</h3>
              <input
                id="files"
                className="hidden"
                onChange={(e)=> postDetails(e.target.files[0])}
                type="file"
              ></input>
                <label for="files" className='m-2'>
                <svg
                  className="w-[53px] h-[53px] cursor-pointer"
                  viewBox="0 0 50 50"
                  fill="none"
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
                  <circle cx="25" cy="25" r="25" fill="white" />
                  <path
                    d="M22.2182 34.7611C26.3394 30.7479 29.5631 27.5399 33.149 24.0961C34.3328 22.8854 35.0826 21.7004 35.3983 20.5411C35.9508 18.3535 35.1013 16.4592 33.6225 14.9768C32.2019 13.5857 30.6826 12.9288 29.0647 13.0061C27.4468 13.0834 25.8486 13.882 24.2702 15.4019L14.2075 25.294L15.8649 26.8783L25.9275 17.0248C26.9601 16.0635 28.1888 15.1572 29.5974 15.2859C31.7437 15.581 33.6391 18.1532 33.149 19.9615C32.5276 21.5659 31.671 22.2976 30.4854 23.4585C26.8787 26.9812 24.0666 29.7053 20.5608 33.1382C19.2433 34.3171 18.3912 34.6363 17.1672 33.5246C16.5358 32.9063 16.2595 32.3009 16.3385 31.7084C16.426 31.0171 16.8257 30.539 17.2855 30.0855L26.48 21.0821C26.9 20.67 27.8566 19.8792 28.2558 20.232C28.562 20.9276 27.7734 21.5916 27.3876 21.9708L18.9429 30.2401L20.5608 31.863L29.045 23.5938C30.5063 22.1179 31.5562 20.3144 29.9131 18.6477C28.096 17.1205 26.1816 18.1401 24.8226 19.4592L15.6281 28.4626C14.6811 29.39 14.1417 30.3947 14.0102 31.4766C13.9065 32.9934 14.6048 34.211 15.5492 35.1476C16.4369 36.012 17.3958 36.4909 18.5878 36.5C20.0208 36.4438 21.4299 35.5195 22.2182 34.7611Z"
                    fill="#9999EE"
                  />
                </svg>
              </label>
            </div>

            <div className='bg-pale flex flex-col justify-between m-10 my-5 rounded-3xl p-5'>
              <h3 className='mx-5 mb-4 text-lg font-medium text-accent'>Enter Event Name</h3>
              <textarea onChange={(e)=>setFormData(e.target.value)} spellCheck="true" id="data" name="data"
                className="w-full mx-auto rounded-full text-lg resize-none font-[Montserrat] p-5 h-[4.5vw]"
                placeholder="Type Something..."
              ></textarea>
            </div>

            <div className='bg-pale flex flex-col justify-between m-10 my-5 rounded-3xl p-5'>
              <h3 className='mx-5 mb-4 text-lg font-medium text-accent'>Enter Event Date</h3>
              <textarea onChange={(e)=>setFormData(e.target.value)} spellCheck="true" id="data" name="data"
                className="w-full mx-auto rounded-full text-lg resize-none font-[Montserrat] p-5 h-[4.5vw]"
                placeholder="Type Something..."
              ></textarea>
            </div>

            <button></button>
        </form>

      </Body>
    </>
  )
}
