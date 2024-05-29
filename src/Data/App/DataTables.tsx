import React, { useEffect } from 'react';
import DataTable from "react-data-table-component";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DataTableExtensions from 'react-data-table-component-extensions';
import "react-data-table-component-extensions/dist/index.css";
import { Badge, OverlayTrigger, Tooltip, } from 'react-bootstrap';


import pic1 from '../../assets/IGO/Pick & Pay Zimbabwe-QRCODE.png';
import { isEmpty } from '../../service/CommonUtils';

 export const Ratings=({rate})=>{

    useEffect(()=>{

    },[rate])

    if(rate==5){
        return(
             <span className="text-nowrap align-middle">
             <p className="text-muted float-start me-3">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
              </p>
    </span>
    )}else if(rate==4){
        return(
        <span className="text-nowrap align-middle">
        <p className="text-muted float-start me-3">
           <span className="fa fa-star text-warning"></span>
           <span className="fa fa-star text-warning"></span>
           <span className="fa fa-star text-warning"></span>
           <span className="fa fa-star text-warning"></span>
           <span className="fa fa-star-o text-warning"></span>
         </p>
   </span>)
    }else if(rate==3){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)

    }else if(rate==2){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==1){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==0.5){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star-half-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==1.5){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa  fa-star-half-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==2.5){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-half-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==3.5){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-half-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }else if(rate==4.5){
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star text-warning"></span>
               <span className="fa fa-star-half-o text-warning"></span>
             </p>
       </span>)
    } else{
        return(
            <span className="text-nowrap align-middle">
            <p className="text-muted float-start me-3">
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
               <span className="fa fa-star-o text-warning"></span>
             </p>
       </span>)
    }
        }

export const Partner = ({partnerData}) => {


    interface PartnerQRDetails {
      partnerId: string;
      icon?: any;
      partner: string;
      rating: Number;
      points: String;
      status: string;
      Action: string;
      classname: string;
    }

    const columns: any = [
      {
        name: "PARTNER ID",
        selector: row => [row.partnerId],
        sortable: false,
        cell: row => <span className="align-middle"> {row.partnerId} </span>
      },
      {
        name: "PARTNER QR CODE",
        selector: row => [row.icon],
        sortable: true,
        cell: row => <div className="align-middle">
          <img className="w-5 h-5 me-2 br-5" alt="" src={row.icon} /> 
        </div>
      },
      {
        name: "PARTNER NAME",
        selector: row => [row.partner],
        sortable: true,
        cell: row => <span className="text-nowrap align-middle">{row.partner}</span>
      },
      {
        name: "RATING",
        selector: row => [row.rating],
        sortable: true,
        cell: row => <Ratings rate={row.rating}/>
      },
      {
        name: "POINTS",
        cell: row => <span className="text-center align-middle">{row.points} points</span>
      },
      {
        name: "STATUS",
        sortable: true,
        cell: row => <Badge bg={row.classname} className="text-center align-middle">{row.status}</Badge>
      },
      {
        name: "ACTION",
        sortable: false,
        cell: row => <div>
          <OverlayTrigger placement="top" overlay={<Tooltip >Edit</Tooltip>}>
            <span className="fe fe-edit fs-18 text-primary me-4"></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
            <span className="fe fe-trash-2 text-danger fs-18 me-4"></span>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip >QR Code</Tooltip>}>
            <span onClick={()=>console.log(row)} className="fe fe-trending-up text-success fs-18 me-4"></span>
          </OverlayTrigger>
        </div>
      },
    ]

    const data: PartnerQRDetails[]=[] ;

    if (!isEmpty(partnerData)) {
      partnerData.forEach((item) => {
       var customer :PartnerQRDetails= {
          partnerId: `#${item['partnerCode']}`,
          icon: pic1,
          partner: item['partner'],
          rating: item['rating'],
          points: item['points'],
          status: 'ACTIVE',
          Action: '0.36%',
          classname: 'success-transparent rounded-pill text-success p-2 px-3',
        }
        data.push(customer)
    });}


  
    const tableData = {
      columns,
      data
    };
  
    return (
      <div className="product">
        <DataTableExtensions className="table-bordered text-nowrap mb-0" {...tableData}>
          <DataTable className="border-bottom"
            columns={columns}
            data={data}
            noHeader
            // defaultSortField="name"
            sortIcon={<ArrowDownwardIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            dense
          />
        </DataTableExtensions>
      </div>
    );
  };


  export const IGOSessionTable = ({igoSessionList}) => {



    interface product {
      trid: string;
      product: string;
      customer: string;
      amount: String;
      status: string;
      Action: string;
      classname: string;
    }
  
    const data: product[] = []

    const columns: any = [
      {
        name: "SESSION CODE",
        selector: row => [row.trid],
        sortable: false,
        cell: row => <span className="align-middle"> {row.trid} </span>
      },
      {
        name: "SESSION START DATE",
        selector: row => [row.icon],
        sortable: true,
        cell: row => <div className="align-middle">
       <span >{row.product}</span>
        </div>
      },
      {
        name: "SESSION END DATE",
        selector: row => [row.customer],
        sortable: true,
        cell: row => <span className="text-nowrap align-middle">{row.customer}</span>
      },
     
      {
        name: "DESCRIPTION",
        cell: row => <span className="text-center align-middle">{row.amount}</span>
      },
      {
        name: "SESSION STATUS",
        sortable: true,
        cell: row => <Badge bg={row.classname} className="text-center align-middle">{row.status}</Badge>
      },
      {
        name: "ACTION",
        sortable: false,
        cell: row => <div>
          <OverlayTrigger placement="top" overlay={<Tooltip >IGO</Tooltip>}>
            <span className="fe fe-trending-up text-success fs-18 me-4"></span>
          </OverlayTrigger>
        </div>
      },
    ]

    function formatDate(startDate) {
      var d = new Date(startDate),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
      return [year, month, day].join('-');
  }

     const badge=['success-transparent rounded-pill text-success p-2 px-4','info-transparent rounded-pill text-info p-2 px-3','danger-transparent rounded-pill text-danger p-2 px-3']
     const Status=(st)=>{
        if(st==='ACTIVE'){
          return badge[0]
        }else if(st==='SUSPEND'){
          return badge[1]
        }else{
          return badge[2]
        }
     }

    if (!isEmpty(igoSessionList)) {
      igoSessionList.forEach((item) => {
       var customer :product=    {
        trid: item['sessionCode'],
        product: formatDate(item['sessionStartDate']),
        customer: formatDate(item['sessionEndDate']),
        amount: item['description'],
        status: item['sessionStatus'],
        Action: '0.36%',
        classname: Status(item['sessionStatus']),
      }
        data.push(customer)
    });}

  
    const tableData = {
      columns,
      data
    };
  
    return (
      <div className="product">
        <DataTableExtensions className="table-bordered text-nowrap mb-0" {...tableData}>
          <DataTable className="border-bottom"
            columns={columns}
            data={data}
            noHeader
            // defaultSortField="name"
            sortIcon={<ArrowDownwardIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            dense
          />
        </DataTableExtensions>
      </div>
    );
  };


  export const IGOSessionTransaction=({sessionTransactions})=>{
    interface Transactions {
      sessionCode: string,
      trxDate: string;
      memberName: string;
      memberNumber: string;
      point: string,
      partner: string,
      Action: string;
     
    }

    const columns: any = [
      {
        name: "IGO Session",
        selector: row => [row.sessionCode],
        sortable: false,
        cell: row => <span className="align-middle"> {row.sessionCode} </span>
      },
      {
        name: "Trx Date",
        selector: row => [row.trxDate],
        sortable: false,
        cell: row => <span className="align-middle"> {row.trxDate} </span>
      },
      {
        name: "Member",
        selector: row => [row.memberNamer],
        sortable: false,
        cell: row => <span className="align-middle"> {row.memberName} </span>
      },
      {
        name: "Membership Number",
        selector: row => [row.memberNumber],
        sortable: false,
        cell: row => <span className="align-middle"> {row.memberNumber} </span>
      },
      {
        name: "Points",
        selector: row => [row.point],
        sortable: false,
        cell: row => <span className="align-middle"> {row.point} </span>
      },
      {
        name: "Partner",
        selector: row => [row.partner],
        sortable: false,
        cell: row => <span className="align-middle"> {row.partner} </span>
      },
      {
        name: "ACTION",
        sortable: false,
        cell: row => <div>
          <OverlayTrigger placement="top" overlay={<Tooltip >IGO</Tooltip>}>
            <span className="fe fe-trending-up text-success fs-18 me-4"></span>
          </OverlayTrigger>
        </div>
      },
    ]

    function formatDate(startDate) {
      var d = new Date(startDate),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
      return [year, month, day].join('-');
  }

    const data: Transactions[] = []
  
    if (!isEmpty(sessionTransactions)) {
      sessionTransactions.forEach((item) => {
       var igoTransaction :Transactions= {
        sessionCode: item['igoSession']['sessionCode'],
        trxDate: formatDate( item['trxDate']),
        memberName: item['memberName'],
        memberNumber: item['memberNumber'],
        point: item['point'],
        partner: item['partnersQRCodes']['partner'],
        Action: '0.36%',
    
      }
        data.push(igoTransaction)
    });}

    const tableData = {
      columns,
      data
    };

    return(
      <div className="product">
      <DataTableExtensions className="table-bordered text-nowrap mb-0" {...tableData}>
          <DataTable className="border-bottom"
            columns={columns}
            data={data}
            noHeader
            // defaultSortField="name"
            sortIcon={<ArrowDownwardIcon />}
            defaultSortAsc={true}
            pagination
            highlightOnHover
            dense
          />
        </DataTableExtensions>
      </div>
    )
  }