import Link from 'next/link'
import React from 'react'

const Footar1 = () => {
  return (
    <div className="bg-[#1a1b1f] min-h-[600px] w-full -mt-27  flex justify-center items-center p-6">
      <div className="w-[1080px] h-[360px] border rounded-3xl shadow-lg bg-[#333333] flex flex-col">
        
       
        <h1 className="text-center text-gray-400 text-2xl font-bold py-4 relative">
          Terms of Use
          <span className="block w-1/4 mx-auto border-t border-gray-300 mt-2"></span>
        </h1>

       
        <div className="flex-1 overflow-y-auto p-6 text-gray-400 text-sm">
          <p>
            <span className="font-bold text-gray-500">TERMS AND CONDITIONS :</span> By visiting our site
            “algorooms.com" you ("you" refers to the user or viewer of the Website) are agreeing to be bound by the following terms and conditions and the Privacy Policy on the Website.<br/><br/>
            <span className="font-bold text-gray-500">REGISTRATION AND TERMINATION :</span> By registering for this facility you understand that algorooms and its directors, employees and associates reserve the right, in its sole discretion, to deny you access to this Website or any portion thereof without notice for various reasons.<br/><br/>
            <span className="font-bold text-gray-500">LICENSE :</span> Algorooms grants to you a non-exclusive royalty-free revocable license to view, copy, and store this website and the material on this website for personal non-commercial use.<br/><br/>
            <span className="font-bold text-gray-500">ENFORCEMENT OF COPYRIGHT :</span> Algorooms takes the protection of its copyright materials very seriously. If Algorooms discovers that you have used our copyright materials in contravention of the license above, ALGOROOMS may bring legal proceedings against you for an injunction to stop you using those materials and monetary damages.<br/><br/>
            <span className="font-bold text-gray-500">SECURITY :</span> Unauthorized use of this Website and systems, including, but not limited to, unauthorized entry into Algorooms’s systems, online accounts, misuse of passwords is strictly prohibited.<br/><br/>
            <span className="font-bold text-gray-500">STRATEGY INTELLECTUAL PROPERTY :</span> The intellectual property of the strategy logic and configuration will solely and exclusively belong to the strategy creator.<br/><br/>
            <span className="font-bold text-gray-500">CAVEAT EMPTOR :</span> Indian laws require Portfolio managers and Investment Advisory Service providers to be registered under SEBI. US Laws do not have any such requirement.<br/><br/>
            <span className="font-bold text-gray-500">SERVICE DELAYS :</span> Algorooms reserves its right to change, improve or correct the information, materials and descriptions on this website and to suspend and/or deny access to this web site for scheduled or unscheduled maintenance.<br/><br/>
            <span className="font-bold text-gray-500">LIABILITY :</span> You agree that Algorooms shall not be liable for any direct, special, indirect, consequential or incidental damages arising out of the use or inability to use www.algorooms.com.<br/><br/>
            <span className="font-bold text-gray-500">INDEMNIFICATION :</span> You shall indemnify, defend and hold harmless Algorooms from any and all claims and losses imposed on, incurred by or asserted as a result of or related to your access and use of www.algorooms.com.<br/><br/>
            <span className="font-bold text-gray-500">ENTIRE AGREEMENT :</span> This User Agreement constitutes the entire agreement between the parties.<br/><br/>
            <span className="font-bold text-gray-500">DISCLAIMER :</span> The information made available is for educational purposes only. Algorooms does not recommend or advocate the buying, selling, or holding of any investment.<br/><br/>
            If you have any questions or concerns about these Terms, please contact us at{" "}
            <Link href="" className="text-blue-400 underline">
              supports@algorooms.com
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footar1
