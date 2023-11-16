import React from "react";
import { __ } from "@/Libs/Lang";
import { Link } from "@inertiajs/react";

const WhatIs = ({ locale }) => {
    return (
        <section className="bg-kblue-100 mt-20 rounded-lg">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <Link rel="stylesheet" href="blog/nosyny-dst-ldan-chyy">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
                        {__("What is toouch typing")}
                    </h2>
                </Link>
                <p>
                    نوسینی دەست لێدان پێویستییەکی بنەڕەتییە لە سەردەمی
                    دیجیتاڵیدا، بە تایبەتی بۆ ئەو کەسانەی کە کاریان نوسینە
                    رۆژانە. ئەم تەکنیکە نەک هەر خێرایی تایپکردن بەرز دەکاتەوە
                    بەڵکو بەشدارە لە باشترکردنی نوسین و کەمکردنەوەی فشار لەسەر
                    پەنجە و مەچەک. با وردبینەوە لەوەی کە تایپکردنی دەست لێدان
                    چییە و بۆچی پێویستییەکی گرنگە بۆ هەموو کەس..
                </p>
                <Link rel="stylesheet" href="blog/nosyny-dst-ldan-chyy">
                    <h6 className="mb-8 text-xl tracking-tight font-extrabold text-gray-900 text-center">
                        {__("Read more")}
                    </h6>
                </Link>
            </div>
        </section>
    );
};

export default WhatIs;
