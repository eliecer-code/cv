import React from 'react';
import Section from '../Section';
import { CiLink } from "react-icons/ci";

import { education } from '../../../cv.json';
import styled from 'styled-components';

const Education = () => {
    return (
        <Section title="Educación">
            <ul>
                {education.map(({ institution, url, startDate, endDate, area }) => {
                     const years = `${startDate} - ${endDate}`;

                    return (
                        <li key={institution}>
                            <Article>
                                <header>
                                    <div>
                                        <a
                                            href={url}
                                            target='__blank'
                                        ><h3>{institution}</h3></a>
                                    </div>
                                    <time>{years}</time>
                                </header>
                                <footer>
                                    <p>{area}</p>
                                </footer>
                            </Article>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
};

export default Education;

const Article = styled.article`
    header{
        display: flex;
        justify-content: space-between;
    }
`
