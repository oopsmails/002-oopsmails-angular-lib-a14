import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const GITHUB_URL_USERS = 'https://api.github.com/search/users';
const GITHUB_URL_REPOS = 'https://api.github.com/search/repositories';
export class GithubService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    searchUsers(term) {
        if (term === '') {
            return of([]);
        }
        return this.httpClient
            .get(GITHUB_URL_USERS, {
            params: { q: term },
        })
            .pipe(map((data) => (data && data.items) || []), catchError((err) => {
            this.errorMessage = (err && err.message) || 'Something goes wrong';
            console.log('GithubService, searchUsers: ', term, this.errorMessage);
            return of([]);
        }));
    }
    searchRepos(term) {
        if (term === '') {
            console.log('Not defined');
            return of(null);
            //return empty();
        }
        else {
            let params = { q: term };
            return this.httpClient.get(GITHUB_URL_REPOS, { params }).pipe(map((response) => {
                console.log('GithubService, searchRepos: ', response);
                console.log('GithubService, searchRepos, response.items.size: ', response?.items?.length);
                return response['items'];
            }));
        }
    }
}
GithubService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
GithubService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: GithubService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC9zZXJ2aWNlcy9naXRodWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBUXZELE1BQU0sZ0JBQWdCLEdBQUcscUNBQXFDLENBQUM7QUFDL0QsTUFBTSxnQkFBZ0IsR0FBRyw0Q0FBNEMsQ0FBQztBQUd0RSxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5QyxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVTthQUNuQixHQUFHLENBQTJCLGdCQUFnQixFQUFFO1lBQy9DLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7U0FDcEIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxJQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQ25FLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLHNCQUFzQixDQUFDO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsaUJBQWlCO1NBQ2xCO2FBQU07WUFDTCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxDQUFDLFFBQWtDLEVBQUUsRUFBRTtnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMxRixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzsyR0F0Q1UsYUFBYTsrR0FBYixhQUFhOzRGQUFiLGFBQWE7a0JBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBHaXRIdWJSZXBvLFxyXG4gIEdpdEh1YlJlcG9TZWFyY2hSZXNwb25zZSxcclxuICBHaXRIdWJVc2VyLFxyXG4gIEdpdEh1YlVzZXJTZWFyY2hSZXNwb25zZSxcclxufSBmcm9tICcuLi9tb2RlbHMvc2hhcmVkLm1vZGVsJztcclxuXHJcbmNvbnN0IEdJVEhVQl9VUkxfVVNFUlMgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnMnO1xyXG5jb25zdCBHSVRIVUJfVVJMX1JFUE9TID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3JlcG9zaXRvcmllcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHaXRodWJTZXJ2aWNlIHtcclxuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBzZWFyY2hVc2Vycyh0ZXJtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdpdEh1YlVzZXJbXT4ge1xyXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XHJcbiAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxyXG4gICAgICAuZ2V0PEdpdEh1YlVzZXJTZWFyY2hSZXNwb25zZT4oR0lUSFVCX1VSTF9VU0VSUywge1xyXG4gICAgICAgIHBhcmFtczogeyBxOiB0ZXJtIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoZGF0YTogR2l0SHViVXNlclNlYXJjaFJlc3BvbnNlKSA9PiAoZGF0YSAmJiBkYXRhLml0ZW1zKSB8fCBbXSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IChlcnIgJiYgZXJyLm1lc3NhZ2UpIHx8ICdTb21ldGhpbmcgZ29lcyB3cm9uZyc7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnR2l0aHViU2VydmljZSwgc2VhcmNoVXNlcnM6ICcsIHRlcm0sIHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgIHJldHVybiBvZihbXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hSZXBvcyh0ZXJtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdpdEh1YlJlcG9bXT4ge1xyXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgZGVmaW5lZCcpO1xyXG4gICAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgICAgIC8vcmV0dXJuIGVtcHR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcGFyYW1zID0geyBxOiB0ZXJtIH07XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KEdJVEhVQl9VUkxfUkVQT1MsIHsgcGFyYW1zIH0pLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXNwb25zZTogR2l0SHViUmVwb1NlYXJjaFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnR2l0aHViU2VydmljZSwgc2VhcmNoUmVwb3M6ICcsIHJlc3BvbnNlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdHaXRodWJTZXJ2aWNlLCBzZWFyY2hSZXBvcywgcmVzcG9uc2UuaXRlbXMuc2l6ZTogJywgcmVzcG9uc2U/Lml0ZW1zPy5sZW5ndGgpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlWydpdGVtcyddO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==