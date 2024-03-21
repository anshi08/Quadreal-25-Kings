import React, { useState, useEffect } from 'react';
import "./HotelImage.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import image2 from "../../assets/Space2-CC98oV9W-v2.png"
import image3 from "../../assets/space3.png"
import image4 from "../../assets/space4.png"
import image5 from "../../assets/space5.png"
import { Grid } from '@mui/material';

const HotelImage = () => {


    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    }
    return (
        <>
            <div className='mt-14'>
                <div className="image-container">
                    <div className="left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ marginBottom: '30%' }}> {/* Adding margin-bottom */}
                            <div className="circle" >
                                <div className="logo"  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 54" width="82" height="54">
                                        <path d="M10.70163,12.39147c0,4.68143 2.63915,7.16437 5.70525,7.16437c1.35433,0 2.21022,-0.21136 3.13759,-0.99159h0.14298c-1.35433,4.18366 -4.4939,5.95747 -8.48539,5.95747c-5.2783,0 -9.27178,-3.68786 -9.27178,-9.50508c0,-7.80238 6.84511,-12.91048 16.54384,-12.91048c10.98355,0 20.18185,4.04342 20.18185,14.54206c0,10.71198 -9.83972,16.88278 -27.66838,25.74985h13.97617c8.05845,0 10.98355,-0.70913 14.55008,-6.09969h0.14099v0l-1.92425,16.17365v0h-37.44058v0v-0.14222c20.82327,-20.5015 25.60114,-27.59476 25.60114,-38.44897c0,-5.67499 -1.85277,-10.49865 -7.41702,-10.49865c-5.06185,0 -7.77249,3.83206 -7.77249,9.00928M68.10601,37.01384c0,-7.16579 -3.0661,-12.98417 -9.77021,-12.98417c-3.63603,0 -7.34554,2.27006 -9.62724,4.75349h-0.07149v0l3.13759,-26.53535c5.06383,0.63814 11.55348,1.06489 15.61844,1.06489c5.63376,0 9.20029,-0.21338 12.05192,-3.1927h0.14298c0,8.29983 -2.63915,14.33158 -12.62383,14.33158c-4.42043,0 -11.4105,-1.34742 -14.54809,-2.48343l-1.49731,13.48006c2.28171,-2.41033 6.77561,-4.89573 12.83632,-4.89573c10.41362,0 17.4017,5.67612 17.4017,15.04282c0,11.56365 -9.69872,17.5954 -20.89475,17.5954c-9.34327,0 -17.68568,-3.90197 -17.68568,-11.84815c0,-5.53388 3.77901,-8.5863 8.84284,-8.5863c3.99348,0 6.34667,1.70303 7.27404,3.76169h-0.14298c-0.42893,-0.21337 -0.92737,-0.2845 -1.42581,-0.2845c-2.49617,-0.07112 -3.99546,2.62568 -3.99546,6.59877c0,5.32051 2.9251,9.0822 7.13305,9.0822c5.77674,0 7.84397,-6.88327 7.84397,-14.90057" fill="#a57c52" fillOpacity="1" style={{ transitionProperty: 'none' }} />
                                    </svg>
                                </div>
                                <div className='box'>
                                    {/* {rotatedText} */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlnsAvocode="https://avocode.com/"
                                        width="151"
                                        height="154"
                                        version="1.1"
                                        viewBox="0 0 151 154"
                                        aria-hidden="true"
                                        style={{ opacity: '0.45' }}

                                    >
                                        <path d="M140.67773,76.91024l1.67603,0.05927l-0.11121,3.18282l8.75745,0.31216l-0.06752,1.85121l-8.75745,-0.31413l-0.11517,3.18282l-1.68199,-0.06125zM137.64519,98.13397l0.90752,-3.49498c0.12312,-0.48404 0.28794,-0.94042 0.49844,-1.36519c0.20652,-0.42675 0.46468,-0.78632 0.77447,-1.08465c0.31177,-0.2924 0.67716,-0.4959 1.10411,-0.60851c0.42298,-0.11261 0.92142,-0.09681 1.49532,0.04939c0.73277,0.18967 1.29475,0.54726 1.68596,1.07872c0.3912,0.52948 0.54212,1.18146 0.45078,1.95593l5.16709,-1.52128l-0.56199,2.15942l-4.88907,1.23085l-0.34156,1.30592l4.28539,1.10243l-0.46071,1.79194zM142.75668,96.05358c0.06553,-0.25882 0.12113,-0.51566 0.16283,-0.7804c0.04171,-0.25881 0.04568,-0.50972 0.00993,-0.7468c-0.03574,-0.23709 -0.12908,-0.44256 -0.28,-0.62432c-0.14893,-0.17979 -0.39319,-0.31413 -0.72681,-0.39909c-0.29588,-0.07705 -0.5461,-0.07705 -0.76056,0.00198c-0.21447,0.07705 -0.39121,0.20152 -0.5322,0.37933c-0.14298,0.17386 -0.26014,0.37933 -0.35348,0.61444c-0.08936,0.23313 -0.16482,0.46428 -0.22241,0.69148l-0.40312,1.54894l2.74241,0.70531zM140.93152,108.06651c0.55801,0.28845 1.01078,0.64407 1.3583,1.06884c0.3495,0.42477 0.59376,0.88313 0.73475,1.37507c0.13901,0.49195 0.17674,1.0076 0.10922,1.54498c-0.06752,0.53936 -0.24028,1.0728 -0.51631,1.60228c-0.27802,0.52751 -0.62355,0.97203 -1.02865,1.33358c-0.4071,0.36155 -0.85788,0.62827 -1.3444,0.79818c-0.4905,0.17188 -1.00681,0.23313 -1.55291,0.18374c-0.54809,-0.04545 -1.10213,-0.21338 -1.66014,-0.50578l-5.85816,-3.03859l0.86383,-1.63982l5.80255,3.01686c0.23036,0.12052 0.48653,0.20548 0.76852,0.26672c0.28595,0.05927 0.5739,0.06322 0.8678,0.01186c0.29588,-0.05335 0.57986,-0.17386 0.85191,-0.36748c0.27603,-0.19362 0.51433,-0.48799 0.72085,-0.87523c0.20256,-0.39118 0.3078,-0.75273 0.31178,-1.0886c0.00595,-0.32993 -0.05561,-0.63419 -0.18071,-0.90486c-0.1271,-0.26671 -0.2939,-0.49984 -0.50639,-0.69939c-0.21049,-0.19757 -0.42893,-0.35562 -0.65929,-0.47416l-5.80255,-3.01489l0.85986,-1.63586zM123.71111,129.90645c-0.61759,-0.56109 -1.08624,-1.17356 -1.40397,-1.83146c-0.31773,-0.65987 -0.4905,-1.33358 -0.52028,-2.01321c-0.02383,-0.68161 0.09135,-1.35532 0.35546,-2.02508c0.26014,-0.66975 0.66525,-1.29802 1.21135,-1.89072c0.54212,-0.60653 1.13588,-1.07477 1.77929,-1.40471c0.64142,-0.32796 1.30666,-0.50972 1.99574,-0.54924c0.68908,-0.03754 1.37617,0.07113 2.06128,0.32401c0.68709,0.25289 1.33844,0.65988 1.95603,1.22097c0.6017,0.54727 1.05844,1.14787 1.36624,1.79985c0.3078,0.65 0.47064,1.3158 0.49447,2.00334c0.02581,0.68161 -0.09333,1.36322 -0.35149,2.04285c-0.25816,0.67963 -0.65731,1.32173 -1.20341,1.92826c-0.54411,0.59271 -1.13985,1.04711 -1.78922,1.36717c-0.6434,0.32006 -1.30865,0.49787 -1.9878,0.53541c-0.68312,0.03754 -1.36227,-0.06915 -2.04142,-0.31611zM124.93835,128.399c0.41305,0.37538 0.8539,0.65988 1.31659,0.84955c0.46468,0.18966 0.93135,0.28647 1.39802,0.28647c0.46468,0 0.91943,-0.09483 1.36028,-0.2845c0.43887,-0.18769 0.84397,-0.48009 1.20936,-0.8772c0.36341,-0.39909 0.62355,-0.82386 0.77844,-1.28222c0.15092,-0.45638 0.20653,-0.91671 0.16681,-1.37902c-0.0417,-0.46033 -0.17674,-0.91276 -0.41106,-1.35729c-0.23234,-0.44058 -0.55405,-0.85152 -0.96908,-1.2269c-0.38525,-0.35167 -0.80227,-0.61444 -1.25107,-0.79225c-0.45078,-0.17781 -0.90751,-0.26276 -1.37021,-0.26079c-0.46269,0.00593 -0.91347,0.10274 -1.35433,0.29833c-0.44085,0.19757 -0.84397,0.49392 -1.20936,0.89103c-0.36539,0.39711 -0.62354,0.81991 -0.77645,1.26839c-0.15688,0.45045 -0.21447,0.90486 -0.17674,1.36519c0.03972,0.45836 0.1688,0.90091 0.38525,1.32964zM115.23406,133.04798c-0.54809,-0.13632 -1.01078,-0.16398 -1.38809,-0.08495c-0.37134,0.081 -0.7129,0.22127 -1.01673,0.41884c-0.45674,0.2924 -0.8122,0.64012 -1.07632,1.03723c-0.25815,0.39909 -0.43092,0.82386 -0.50836,1.27827c-0.07745,0.4544 -0.06554,0.91474 0.03773,1.38693c0.10326,0.47021 0.29787,0.92264 0.58383,1.35729c0.30383,0.46626 0.65929,0.85151 1.06042,1.14984c0.40312,0.30228 0.83007,0.50775 1.28284,0.62432c0.44879,0.11459 0.91347,0.13632 1.3861,0.06124c0.47659,-0.0731 0.9373,-0.25684 1.39404,-0.55121c0.3495,-0.23116 0.64142,-0.53739 0.8678,-0.92264c0.22043,-0.38329 0.35546,-0.8535 0.40114,-1.41064l1.88255,0.07508c-0.0417,0.7962 -0.2661,1.50349 -0.6712,2.1199c-0.4071,0.61444 -0.93532,1.13009 -1.57476,1.54498c-0.67517,0.44058 -1.36822,0.73298 -2.07319,0.88511c-0.70695,0.1462 -1.39603,0.15608 -2.06525,0.0237c-0.66723,-0.13434 -1.29872,-0.40501 -1.89447,-0.812c-0.59574,-0.40699 -1.11801,-0.9503 -1.5668,-1.63191c-0.45476,-0.69742 -0.75461,-1.40471 -0.89759,-2.12386c-0.14298,-0.71717 -0.141,-1.41063 0.00198,-2.07841c0.14695,-0.66383 0.42695,-1.29012 0.84993,-1.87294c0.42099,-0.58481 0.96908,-1.09453 1.64624,-1.53313c0.59178,-0.38724 1.21135,-0.63815 1.85277,-0.75866c0.6434,-0.12052 1.35035,-0.06915 2.11291,0.14422zM92.57035,141.18067l0.3495,1.63784l-4.94865,1.04711l0.53418,2.49923l4.6905,-0.99376l0.35149,1.63783l-4.69249,0.9918l0.59376,2.75804l5.2088,-1.1044l0.34752,1.63784l-7.02582,1.48571l-2.17447,-10.16487zM77.72835,145.81996c-0.37532,-0.41884 -0.7427,-0.69939 -1.10014,-0.84362c-0.35745,-0.14224 -0.71688,-0.21534 -1.08029,-0.22325c-0.54212,-0.00988 -1.03262,0.07903 -1.47149,0.26079c-0.44283,0.18572 -0.82411,0.44058 -1.14581,0.77447c-0.31972,0.32994 -0.56795,0.72112 -0.74667,1.16763c-0.18071,0.44452 -0.27801,0.93054 -0.28397,1.45014c-0.00993,0.55517 0.06553,1.07082 0.23035,1.54301c0.16284,0.47416 0.39915,0.88313 0.70894,1.23282c0.30979,0.34772 0.68114,0.62037 1.11404,0.82584c0.4349,0.20349 0.92142,0.31018 1.46355,0.31808c0.42099,0.0079 0.83404,-0.08495 1.23518,-0.27857c0.40312,-0.19559 0.78042,-0.50775 1.13191,-0.9424l1.51518,1.11429c-0.48255,0.63419 -1.06638,1.09452 -1.7495,1.37704c-0.68511,0.28253 -1.41192,0.4149 -2.17844,0.40304c-0.80625,-0.0158 -1.54298,-0.15608 -2.2122,-0.42674c-0.67121,-0.27067 -1.24114,-0.65 -1.72171,-1.13009c-0.47858,-0.48404 -0.84992,-1.06094 -1.11404,-1.7307c-0.26411,-0.66975 -0.38922,-1.41261 -0.37532,-2.22264c0.01589,-0.83176 0.16483,-1.58647 0.45475,-2.2582c0.28596,-0.67766 0.67915,-1.2506 1.17362,-1.72279c0.49646,-0.47021 1.08029,-0.82979 1.75943,-1.07675c0.67717,-0.24893 1.41986,-0.36352 2.2261,-0.35167c0.71093,0.01383 1.36426,0.14818 1.96199,0.40897c0.6017,0.26079 1.15972,0.69346 1.67007,1.29802zM56.43425,140.53067l3.51886,0.8851c0.48454,0.12052 0.94525,0.2845 1.37617,0.488c0.42894,0.20349 0.79433,0.45835 1.09021,0.76459c0.29788,0.3082 0.5044,0.6737 0.62355,1.0965c0.11121,0.42082 0.09929,0.91671 -0.04567,1.48768c-0.18468,0.72903 -0.54213,1.29012 -1.07433,1.68328c-0.53021,0.39119 -1.18553,0.54331 -1.96596,0.46034l1.56085,5.13084l-2.17248,-0.54727l-1.26496,-4.85819l-1.3166,-0.32994l-1.08227,4.26944l-1.80312,-0.45243zM58.5551,145.60421c0.25815,0.06717 0.51631,0.11854 0.78241,0.16003c0.26411,0.04149 0.51432,0.04347 0.75064,0.0079c0.24028,-0.03753 0.4468,-0.13039 0.6295,-0.28449c0.18071,-0.14818 0.31177,-0.39119 0.39518,-0.7231c0.07546,-0.29438 0.0695,-0.54924 -0.00596,-0.75866c-0.07745,-0.2114 -0.20454,-0.38921 -0.38326,-0.52949c-0.17873,-0.14027 -0.38525,-0.25486 -0.61958,-0.34376c-0.23631,-0.08891 -0.47064,-0.16201 -0.699,-0.2193l-1.55688,-0.39514l-0.69504,2.73434zM43.45257,134.94661l6.18582,3.08601l-0.75262,1.49559l-4.52568,-2.25623l-1.1478,2.28389l4.28539,2.13769l-0.75262,1.49756l-4.28738,-2.13768l-1.26894,2.51899l4.76,2.37476l-0.75262,1.49559l-6.42213,-3.20455zM28.56431,123.61293l2.12879,1.85911l-2.73049,7.30409l6.94638,-3.62537l2.10894,1.83936l-6.89078,7.81381l-1.3305,-1.16368l5.72114,-6.48615l-0.02185,-0.02173l-8.1061,4.40774l-0.97503,-0.85152l3.33418,-8.5705l-0.01986,-0.01778l-5.72113,6.48616l-1.3305,-1.1617zM17.61254,108.29706l1.50525,2.3886l-4.72625,6.21351l7.701,-1.48769l1.48539,2.36489l-8.85277,5.5161l-0.93929,-1.49362l7.35546,-4.57962l-0.01787,-0.02569l-9.03546,1.90851l-0.68908,-1.0965l5.6695,-7.25667l-0.01588,-0.02371l-7.35546,4.57962l-0.93731,-1.49163zM6.59364,92.68366c0.80624,-0.23115 1.57276,-0.30623 2.30751,-0.23313c0.73277,0.07508 1.39802,0.27857 1.99575,0.61048c0.59773,0.33389 1.11603,0.78435 1.55291,1.35532c0.43688,0.57097 0.76652,1.24073 0.99092,2.01124c0.23433,0.77644 0.32567,1.52128 0.27007,2.23845c-0.04965,0.71717 -0.24227,1.37507 -0.56794,1.97765c-0.32766,0.59863 -0.77844,1.12416 -1.35632,1.57462c-0.57588,0.44848 -1.26695,0.78829 -2.06723,1.01747c-0.78638,0.22523 -1.53504,0.29833 -2.25589,0.21733c-0.71886,-0.07705 -1.38014,-0.28648 -1.97787,-0.62234c-0.59773,-0.33784 -1.12,-0.79027 -1.57078,-1.3652c-0.44681,-0.57294 -0.78837,-1.24862 -1.0227,-2.02309c-0.22439,-0.77052 -0.30383,-1.5114 -0.24028,-2.22659c0.06355,-0.71322 0.25816,-1.36915 0.58184,-1.96383c0.32369,-0.59665 0.76653,-1.11626 1.33447,-1.56276zM7.24896,94.50919c-0.54014,0.15213 -1.01078,0.37735 -1.41589,0.67173c-0.40908,0.29437 -0.73277,0.63617 -0.97702,1.03328c-0.24227,0.39316 -0.39915,0.82781 -0.46667,1.29802c-0.0695,0.47219 -0.02581,0.96611 0.12312,1.48374c0.14695,0.51565 0.37929,0.95622 0.69107,1.3237c0.30978,0.36945 0.67517,0.65593 1.09418,0.85942c0.41504,0.20745 0.87773,0.32796 1.38014,0.36155c0.49844,0.03359 1.01873,-0.02371 1.55688,-0.17781c0.50241,-0.14423 0.94724,-0.35957 1.33249,-0.64802c0.3912,-0.28648 0.70099,-0.62827 0.93929,-1.02341c0.23829,-0.39316 0.3912,-0.82583 0.45276,-1.30197c0.06156,-0.47614 0.01788,-0.97006 -0.13305,-1.48571c-0.14893,-0.51565 -0.3773,-0.9582 -0.68113,-1.31975c-0.30383,-0.3655 -0.66326,-0.65198 -1.08029,-0.8614c-0.41106,-0.20547 -0.85787,-0.32796 -1.34241,-0.36945zM8.32368,83.78442c0.40114,-0.39119 0.66922,-0.76854 0.79632,-1.13009c0.12709,-0.35958 0.18468,-0.72113 0.17475,-1.08465c-0.0139,-0.53739 -0.12312,-1.02143 -0.32766,-1.45015c-0.20256,-0.43267 -0.47858,-0.79817 -0.8261,-1.10243c-0.34752,-0.30425 -0.74865,-0.53541 -1.20539,-0.69346c-0.45873,-0.15806 -0.94724,-0.23116 -1.46951,-0.21733c-0.56,0.01581 -1.07432,0.11459 -1.54099,0.29833c-0.46865,0.18374 -0.87177,0.43663 -1.20539,0.76064c-0.3356,0.32203 -0.59574,0.70334 -0.77844,1.14194c-0.18667,0.44255 -0.27206,0.93054 -0.25617,1.4699c0.01191,0.42082 0.12312,0.82584 0.3356,1.21702c0.21248,0.39119 0.5461,0.75076 0.99887,1.0807l-1.05248,1.55684c-0.6593,-0.45244 -1.14781,-1.01155 -1.46157,-1.67736c-0.31375,-0.66778 -0.48255,-1.38297 -0.50241,-2.14756c-0.02383,-0.80015 0.08937,-1.54103 0.33163,-2.21869c0.24029,-0.67568 0.59376,-1.26443 1.05646,-1.76033c0.46468,-0.49589 1.02468,-0.89103 1.68993,-1.18343c0.65929,-0.29438 1.39801,-0.45046 2.21418,-0.47416c0.83603,-0.01976 1.59859,0.09681 2.28965,0.35167c0.69106,0.25486 1.28482,0.61839 1.77929,1.0886c0.49447,0.47021 0.8817,1.0392 1.15972,1.70106c0.28,0.66383 0.43092,1.39483 0.45276,2.19695c0.01986,0.70532 -0.08737,1.36125 -0.32368,1.97173c-0.23235,0.60851 -0.64142,1.18146 -1.22923,1.71489zM147.04862,46.24453c0.35149,0.64605 0.61759,1.04118 0.89561,1.2348l-4.1583,3.08799l-0.01787,-0.03754c1.70581,-3.01291 2.55773,-4.43342 1.44765,-6.46047l-0.4468,-0.81201l-10.56256,5.72947c-1.25504,0.67964 -1.53901,1.1538 -1.63631,2.28587l-0.03773,0.01975l-3.13362,-5.71761l0.03972,-0.01976c1.01872,0.55121 1.56085,0.55319 2.81787,-0.1304l10.56057,-5.72551l-0.44482,-0.81398c-1.10809,-2.02705 -2.7722,-2.08632 -6.24142,-2.28982l-0.01788,-0.03753l4.86128,-1.8038c0.01192,0.33784 0.20256,0.77447 0.55206,1.41656zM127.58226,23.71804c-1.25106,1.22294 -0.58581,2.75212 0.27603,4.41959c1.1339,2.21869 2.54383,4.74163 -0.01787,7.2547c-2.17447,2.1357 -5.26241,1.41458 -7.45277,-0.7962c-1.25106,-1.25851 -1.66809,-2.56839 -2.3095,-3.21246c-0.40908,-0.41687 -0.91547,-0.55516 -1.51121,-0.63814l3.30241,-3.7854l0.03178,0.02963c-0.97305,2.94969 -0.7288,5.77096 0.77844,7.29026c1.24907,1.25653 2.71461,1.44817 3.90411,0.2845c1.47943,-1.4541 0.32766,-3.3231 -0.65333,-5.3541c-1.01277,-2.00333 -1.88852,-4.20424 0.27007,-6.32217c2.00369,-1.96975 4.86723,-1.62993 7.19461,0.71717c1.13986,1.14985 1.49929,2.37082 2.10894,2.98525c0.39517,0.39909 0.90156,0.44651 1.34638,0.49787l-3.05419,3.11763l-0.02978,-0.03161c0.72085,-2.55456 0.90156,-4.67249 -0.67915,-6.26686zM118.18658,13.07999c0.61957,0.35364 1.07432,0.56702 1.41191,0.5848l-1.46354,3.98889l-0.03972,-0.0237c-0.00397,-2.49134 -0.33163,-4.12325 -2.69475,-5.48054l-2.13873,-1.2269l-3.21503,5.53981l1.70581,0.98191c1.51915,0.87325 2.36511,0.83571 3.97163,-0.55516l0.03774,0.02173l-2.7305,4.70212l-0.03773,-0.02174c0.39518,-2.06261 -0.03773,-2.73434 -1.5549,-3.60759l-1.70581,-0.98191l-3.46922,5.9705l2.43659,1.40274c2.49816,1.43236 4.32312,0.56702 6.49362,-0.67371l0.03773,0.01976l-2.80794,3.46139l-11.00738,-6.32415l0.01986,-0.03952c1.13986,-0.06519 1.61645,-0.41489 2.33532,-1.64376l4.94865,-8.52703c0.71092,-1.23085 0.76851,-1.79787 0.25816,-2.81337l0.01986,-0.03754zM90.06722,7.49968l-5.7966,8.88068l-0.10525,-0.02173l-2.57958,-13.67566c-0.26212,-1.41656 -0.56,-2.00531 -1.09418,-2.63951l0.00993,-0.04346l6.32681,1.28222l-0.00993,0.03951c-0.62156,0.2272 -0.99092,0.52751 -1.09816,1.05501c-0.07347,0.35958 -0.06156,0.73693 0.01589,1.21109l1.33844,7.50956l2.83376,-4.4433l-0.40114,-2.37082c-0.26212,-1.41261 -0.54212,-1.99938 -1.07432,-2.63358l0.00794,-0.04346l6.21958,1.25851l-0.00795,0.04346c-0.61957,0.22523 -0.9929,0.52356 -1.09815,1.05304c-0.07348,0.35957 -0.0417,0.7389 0.01588,1.21306l1.0644,7.56291l3.95575,-6.28464c0.17475,-0.29438 0.29787,-0.57492 0.35546,-0.85152c0.14496,-0.71717 -0.11121,-1.40866 -0.81021,-1.98951l0.00794,-0.04149l3.61021,0.72903l-0.00993,0.04346c-0.80822,0.38526 -1.59659,0.99575 -2.34525,2.16535l-7.46269,11.42338l-0.10724,-0.02371zM52.76565,11.89537c1.11801,3.8743 3.22298,6.48022 5.4312,5.84801c1.62241,-0.46429 2.26979,-1.81565 1.74355,-3.63723l-0.31773,-1.09848c-0.39319,-1.36717 -0.74667,-1.80379 -1.85475,-2.13768l-0.01192,-0.04149l6.10043,-1.74453l0.00993,0.04149c-0.76256,0.86733 -0.82809,1.42447 -0.43291,2.79164l1.30468,4.51838l-0.0417,0.01185l-2.41078,-1.55486c-0.62355,1.43237 -2.10894,2.84696 -4.02326,3.39224c-4.49788,1.28617 -8.46554,-0.74088 -9.74639,-5.1743c-1.31064,-4.53616 1.45957,-8.60408 5.79064,-9.84284c1.95801,-0.55911 3.22099,-0.24696 3.9061,-0.44452c0.56397,-0.16003 0.84596,-0.50775 1.1756,-1.0076l1.5688,4.88981l-0.03972,0.01185c-1.85277,-2.27401 -4.04312,-3.69057 -6.10241,-3.09984zM39.43328,12.72357l6.55319,9.94162l-0.81418,0.53343l-16.12086,-5.17035l5.31802,8.07065c0.97305,1.47583 1.94808,2.05076 3.33815,1.84133l0.02383,0.03557l-3.42553,2.23251l-0.01986,-0.03556c0.59575,-1.13799 0.4766,-2.21869 -0.41305,-3.57203l-5.07972,-7.70712c-0.78439,-1.19134 -1.26695,-1.49164 -2.41078,-1.49559l-0.02184,-0.03556l4.65475,-3.03465l10.95972,3.51078l-3.0383,-4.61123c-0.97305,-1.47583 -1.97787,-2.05668 -3.35603,-1.82948l-0.02383,-0.03556l3.42554,-2.23252l0.02383,0.03556zM31.39132,33.30265l0.02979,0.02766l-4.39461,4.69619l-0.03376,-0.02766c0.19262,-1.12021 -0.04369,-1.65957 -1.08823,-2.62765l-7.2383,-6.70941c-1.04652,-0.96808 -1.58865,-1.1459 -2.69674,-0.88115l-0.03177,-0.02569l4.3966,-4.70014l0.03177,0.03161c-0.18865,1.11824 0.0278,1.64179 1.07433,2.61185l7.2383,6.70941zM16.30428,54.97486l-0.03773,-0.01976c-0.08142,-1.13206 -0.43886,-1.60425 -1.68397,-2.29969l-8.63433,-4.80683c-1.24709,-0.69346 -1.81503,-0.74088 -2.82581,-0.2193l-0.03972,-0.01976l3.15348,-5.60302l0.03574,0.02371c0.08142,1.13206 0.41901,1.59042 1.66809,2.28586l4.72028,2.62963l-2.04936,-8.17734c-0.11915,-0.48799 -0.34752,-0.83374 -0.65135,-1.00167c-0.39518,-0.22325 -0.90156,-0.15806 -1.40596,0.20152l-0.03574,-0.01976l2.17844,-3.87233l0.03574,0.02371c-0.19659,1.54103 0.01788,2.79756 0.33958,4.16275l0.92539,3.64711l9.06326,-0.28252c1.3027,-0.0652 2.29163,-0.32797 3.18128,-0.84559l0.03773,0.02173l-3.36397,5.97643l-0.03773,-0.01976c0.01191,-0.46428 -0.08142,-0.68951 -0.44284,-0.88905c-0.35745,-0.20152 -0.83206,-0.24104 -1.67404,-0.24104l-5.82043,0.28648l0.34156,1.37705l3.28851,1.83145c1.2471,0.69346 1.8349,0.74878 2.84965,0.2272l0.03773,0.02174z" fill="#a57c52" fill-opacity="1" style={{ transitionProperty: "none" }}></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <Link
                                    to="https://quadreal.findspace.com/building/commerce-court-north-commerce-court?search=25%20king&amp;min=0&amp;max=160750&amp;type=A"
                                    style={btn}
                                    className='linkBtn'
                                    target='_blank'
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    AVAILABILITY
                                </Link>
                            </motion.div>

                            <div style={{ display: 'flex', flexDirection: 'column' }} className='my-14'>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>

                                    <h1 className='legend-text'>LEGEND</h1>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>

                                    <div style={{ display: 'flex', alignItems: 'center' }} className='my-2'>
                                        <div style={{ width: '33px', height: '24px', backgroundColor: 'rgb(192, 221, 197)' }}></div>
                                        <h3 className='legend-points'>Occupied Spaces</h3>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>

                                    <div style={{ display: 'flex', alignItems: 'center' }} className='my-2'>
                                        <div style={{ width: '33px', height: '24px', backgroundColor: 'rgb(165, 124, 82)' }}></div>
                                        <h3 className='legend-points'>Available Spaces</h3>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>

                                    <div style={{ display: 'flex', alignItems: 'center' }} className='my-2'>
                                        <div style={{ width: '33px', height: '24px' }}>
                                            <img src={image3} />
                                        </div>
                                        <h3 className='legend-points'>Concourse Level</h3>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }} className='my-2'>
                                        <div style={{ width: '33px', height: '24px' }}>
                                            <img src={image4} />
                                        </div>
                                        <h3 className='legend-points'>Parking Level</h3>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* For Small devices  */}
                    <div>
                        <div className="center flex flex-row items-end" >
                            <img src={image2} alt="Hotel" style={{width:'420px',height:'819px'}} />


                            <h1 className='image-bottom-text'>DIRECT PATH ACCESS</h1>

                        </div>
                        <Grid container spacing={2}>
                            <Grid xs={8} md={8}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}>
                                    <div style={{ maxWidth: '400px', margin: '2rem 1rem' }}>
                                        <img src={image5} style={{ width: '100%' }} />
                                    </div>

                                </motion.div>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <div style={{ color: 'rgb(165, 124, 82)', margin: '2rem 0' }} className='font-bold'>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 100,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                            },
                                        }}
                                        viewport={{ once: true }}>
                                        <p className='image-bottom-text p-1'>CONCOURSE LEVEL RETAIL <br />+ KING SUBWAY STATION</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 100,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                            },
                                        }}
                                        viewport={{ once: true }}>
                                        <p className='image-bottom-text p-1'>PARKING LEVEL 1</p>

                                        <p className='image-bottom-text p-1'>  PARKING LEVEL 2 </p>

                                        <p className='image-bottom-text p-1'>  PARKING LEVEL 3 </p>
                                    </motion.div>
                                </div>
                            </Grid>

                        </Grid>
                    </div>

                    {/* floor names */}
                    <div className="right">
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='my-9'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 28&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>LEASED</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>4,236 SF</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>
                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 26&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>4,199 SF</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>5,500 SF</span>
                            </motion.div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>LEASED</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>3,296 SF</span>
                            </motion.div>


                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8%' }}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>7,192 SF</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>

                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>7,174 SF</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>
                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>6,865 SF</span>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}>
                                <span className='font-bold my-2 floor-names'>
                                    FLOOR 13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <span className='font-bold my-2 floor-number'>6,567 SF</span>
                            </motion.div>
                        </div>

                    </div>

                    {/* </div> */}
                </div>
            </div>


        </>
    );
}

export default HotelImage;
