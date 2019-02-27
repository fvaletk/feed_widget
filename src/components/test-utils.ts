import { cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import FetchMock from 'jest-fetch-mock';

afterEach(cleanup);

(global as any).fetch = FetchMock;
