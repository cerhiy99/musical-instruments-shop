'use client'
import { Locale } from '@/i18n.config'
import React, { useEffect, useState } from 'react'
import './TempCatalog.scss'
import Link from 'next/link'
import { $host } from '@/app/http'

type Props = {
    params: { lang: Locale }
}

const LIMIT = 12;

const TempCatalog = ({ params: { lang } }: Props) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getProducts();
    }, [page]);

    const getProducts = async () => {
        try {
            const res = await $host.get(`product/getList?page=${page}&limit=${LIMIT}`);
            setProducts(res.data.rows);
            setTotalPages(Math.ceil(res.data.count / LIMIT));
        } catch (err) {
            console.log(err);
        }
    }

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;

        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start < maxVisiblePages - 1) {
            start = Math.max(1, end - maxVisiblePages + 1);
        }

        if (start > 1) {
            pages.push(<button key={1} onClick={() => setPage(1)}>1</button>);
            if (start > 2) pages.push(<span key="start-dots">...</span>);
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button
                    key={i}
                    className={i === page ? 'active' : ''}
                    onClick={() => setPage(i)}
                >
                    {i}
                </button>
            );
        }

        if (end < totalPages) {
            if (end < totalPages - 1) pages.push(<span key="end-dots">...</span>);
            pages.push(<button key={totalPages} onClick={() => setPage(totalPages)}>{totalPages}</button>);
        }

        return (
            <div className="pagination">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                    ← Назад
                </button>
                {pages}
                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
                    Вперед →
                </button>
            </div>
        );
    }

    return (
        <div className="catalogPage">
            <div className="catalog-items">
                {products.map((x: any) => (
                    <div className="catalog-items__item" key={x.id}>
                        <Link href={`/${lang}/item/${x.id}`}>
                            <div className="catalog-item__image">
                                {x.image&&
                                <img
                                    src={process.env.NEXT_PUBLIC_SERVER + x.image.split('/').pop()}
                                    alt={x.name_uk}
                                    style={{aspectRatio:1}}
                                    width={'100%'}
                                />}
                            </div>
                            <div className="catalog-item__name">
                                <p>{x.name_uk}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {renderPagination()}
        </div>
    );
}

export default TempCatalog
