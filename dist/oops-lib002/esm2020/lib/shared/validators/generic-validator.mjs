export class GenericValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
            // return { minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // };
        }
        return null;
    }
    // simulate Asynchronous operation
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'oopsmails') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    return resolve(null);
                }
            }, 2000);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vb3BzLWxpYjAwMi9zcmMvbGliL3NoYXJlZC92YWxpZGF0b3JzL2dlbmVyaWMtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQXdCO1FBQ2hELElBQUssT0FBTyxDQUFDLEtBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDcEMsd0JBQXdCO1lBQ3hCLDhCQUE4QjtZQUM5Qiw2Q0FBNkM7WUFDN0MsUUFBUTtZQUNSLEtBQUs7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtDQUFrQztJQUNsQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQXdCO1FBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFRLEVBQUU7WUFDM0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO29CQUNqQyxPQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VuZXJpY1ZhbGlkYXRvciB7XHJcbiAgc3RhdGljIGNhbm5vdENvbnRhaW5TcGFjZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBpZiAoKGNvbnRyb2wudmFsdWUgYXMgc3RyaW5nKS5pbmRleE9mKCcgJykgPj0gMCkge1xyXG4gICAgICByZXR1cm4geyBjYW5ub3RDb250YWluU3BhY2U6IHRydWUgfTtcclxuICAgICAgLy8gcmV0dXJuIHsgbWlubGVuZ3RoOiB7XHJcbiAgICAgIC8vICAgICAgICAgcmVxdWlyZWRMZW5ndGg6IDEwLFxyXG4gICAgICAvLyAgICAgICAgIGFjdHVhbExlbmd0aDogY29udHJvbC52YWx1ZS5sZW5ndGhcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gc2ltdWxhdGUgQXN5bmNocm9ub3VzIG9wZXJhdGlvblxyXG4gIHN0YXRpYyBzaG91bGRCZVVuaXF1ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gJ29vcHNtYWlscycpIHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzaG91bGRCZVVuaXF1ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=