
// Product Schema

export const Product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'short_description',
            title:'Short Description',
            type: 'string'
        },
        {
            name:'product_image',
            title: 'Product Image',
            type: 'image'
        },
        {
            name:'category',
            title: 'Category',
            type: 'reference',
            to: [{type:'category'}]
        }
        {
            name: 'sku',
            title: 'SKU',
            type: 'string'
        },
        {
            name: 'qty',
            title: 'Quanitity',
            type: 'number'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'discounted_price',
            title: 'Discount Price',
            type: 'number'
        },
        {
            name:'specification',
            title: 'Specification',
            type: 'string'
        },
    ]

}




// Customer Schema

export const Customer = {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
        {
            name:'name',
            title:'Name',
            type: 'string',
            validation: (rule: any) => rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule: any) => rule.email()
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'number'
        },
        {
            name:'image',
            title: 'Image',
            type: 'image'
        },
        {
            name:'address',
            title: 'Address',
            type: 'string'
        }
    ]

}






// Order Schema

export const Order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name:'products',
            title:'Products',
            type: 'array',
            of: [{type: "product"}]
        },
        {
            name: 'customer',
            title: 'Customer',
            type: 'reference',
            to: [{type: "customer"}]
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number'
        },
        {
            name: "payment",
            title: "Payment",
            type: "reference",
            to: [{type: "payment"}]
        }
        
        {
            name:'order_status',
            title: 'Order Status',
            type: 'string',
            options:{
                list:[
                   {title: 'Processing', value: 'processing'},
                   {title: 'Packed', value: 'packed'}, 
                   {title: 'Under Delivery', value: 'under_deliver'}, 
                   {title: 'Delivered', value: 'delivered'}, 
                ]
            }
        },
        {
            name:'date_time',
            title: 'Date & Time',
            type: 'datetime'
        },
        {
            name:'shippingId',
            title: 'Shipping ID',
            type: 'string'
        }
    ]

}






// Payment Schema


export const Payment = {
    name: "payment",
    title: "Payment",
    type: "document",
    fields: [
        {
            name:'type',
            title:'Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Stripe', value: 'stripe'},
                    {title: 'OneLink', value: 'onelink'},
                    {title: 'Cash on Delivery', value: 'cod'},
                ]
            }
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number'
        },
        {
            name:'status',
            title: 'Status',
            type: 'string',
            options:{
                list:[
                   {title: 'Pending', value: 'pending'},
                   {title: 'Failed', value: 'failed'} 
                   {title: 'Recieved', value: 'recieved'} 
                ]
            }
        }
    ]

}
