import DebounceInput from '../DebounceInput/DebounceInput';
import classes from './SearchWp.module.css';
import { useState, useEffect } from 'react';
import { post } from '../../interfaces/wp.interface';
import axios from 'axios';
import _ from 'lodash';
import Link from 'next/link';
import FeatureMedia from '../FeatureMedia/FeatureMedia';
import Pagination from '../Pagination/Pagination';
import { PaginationInterface } from '../../interfaces/pagination.interface';
import wpMenu from '../../datasources/wpMenu';
import wp from '../../datasources/wp';

interface props {
  onClose: Function;
}

export default function SearchWp({ onClose }: props) {
  const [search, setSearch] = useState<string>(''),
    [oldSearch, setOldSearch] = useState<string>(''),
    [posts, setPosts] = useState<Array<post>>([]),
    [isLoading, setIsLoading] = useState<boolean>(false),
    [pagination, setPagination] = useState<PaginationInterface>({
      page: 1,
      total: 1,
      current: 0,
    });

  useEffect(() => {
    if (search) {
      handleFetch();
    } else {
      setPosts([]);
      setPagination({
        page: 1,
        total: 1,
        current: 0,
      });
    }
  }, [search]);

  async function handleFetch() {
    if (pagination.total > posts.length) {
      setIsLoading(true);
      const { data } = await wp.get('/posts', {
        params: {
          page: pagination.current + 1,
          search,
        },
      });
      if (oldSearch === search) {
        setPosts(_.uniqBy([...posts, ...data], 'id'));
      } else {
        setPosts(data);
        setOldSearch(search);
      }

      setPagination({ ...data.pagination, current: pagination.current + 1 });
      setIsLoading(false);
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.containerClose}>
        <div className={classes.close} onClick={() => onClose()}>
          close
        </div>
      </div>
      <div className={classes.page}>
        <DebounceInput
          onChange={(e: string) => setSearch(e)}
          placeholder="Search article..."
        />
        <div className={classes.containerPage}>
          {isLoading && <div className={classes.loading}>loading...</div>}
          {posts.length === 0 && search && !isLoading ? (
            <div className={classes.noResult}>no result.</div>
          ) : (
            <div className={classes.results}>
              <div
                className={classes.resultsContainer}
                data-result={posts.length}
              >
                {posts.map((post) => (
                  <Link key={post.id} href={`/article/${post.slug}`} passHref>
                    <a className={classes.post} data-sticky={post.sticky}>
        
                        <h2
                          className={classes.postTitle}
                          data-sticky={post.sticky}
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      
                    </a>
                  </Link>
                ))}
              </div>
              {!isLoading && search && posts.length > 0 && (
                <Pagination onTrigger={() => handleFetch()} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
